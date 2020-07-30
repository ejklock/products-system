import Joi from "@hapi/joi";
import Product from "@models/Product";
import * as fs from "fs";
import AppError from "src/errors/AppError";

export default class ProcessProductFileService {
  public async execute(file: Express.Multer.File): Promise<Product[]> {
    const buffer = fs.readFileSync(file.path).toString();
    const products: Product[] = JSON.parse(buffer);
    await this.validateJSON(products);
    return products;
  }

  protected async validateJSON(products: Product[]) {
    try {
      const objectSquema = Joi.object<Product>({
        title: Joi.string().required(),
        type: Joi.string().required(),
        description: Joi.string().required(),
        filename: Joi.string().required(),
        height: Joi.number().integer().required(),
        width: Joi.number().integer().required(),
        price: Joi.number().required(),
        rating: Joi.number().integer().required(),
      });
      const squema = Joi.array().items(objectSquema).min(1);
      await squema.validateAsync(products);
    } catch (error) {
      throw new AppError(error, 400);
    }
  }
}
