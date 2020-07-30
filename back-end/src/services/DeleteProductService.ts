import ProductRepository from "src/repositories/ProductRepository";
import Product from "@models/Product";
import AppError from "src/errors/AppError";

export default class DeleteProductService {
  private productRepository: ProductRepository;

  public async execute(productId: string): Promise<void> {
    try {
      this.productRepository = new ProductRepository();
      await this.productRepository.remove(productId);
    } catch (error) {
      throw new AppError("Erro ao deletar o produto", 500);
    }
  }
}
