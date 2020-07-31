import ProductRepository from "../repositories/ProductRepository";
import Product from "@models/Product";
import AppError from "../errors/AppError";

export default class GetAllProductsService {
  private productRepository: ProductRepository;

  public async execute(productId: string): Promise<Product> {
    try {
      this.productRepository = new ProductRepository();
      const result = await this.productRepository.findOrFail(productId);
      return result;
    } catch (error) {
      throw new AppError(
        "Não foi encontrado nenhum produto com os parametros fornecidos",
        404
      );
    }
  }
}
