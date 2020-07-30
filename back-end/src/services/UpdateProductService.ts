import ProductRepository from "src/repositories/ProductRepository";
import Product from "@models/Product";
import AppError from "src/errors/AppError";

export default class UpdateProductService {
  private productRepository: ProductRepository;

  public async execute(product: Product): Promise<Product> {
    try {
      this.productRepository = new ProductRepository();
      const result = await this.productRepository.update(product);
      return result;
    } catch (error) {
      throw new AppError(error, 500);
    }
  }
}
