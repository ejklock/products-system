import ProductRepository from "src/repositories/ProductRepository";
import Product from "@models/Product";

export default class GetAllProductsService {
  private productRepository: ProductRepository;

  public async execute(): Promise<Product[]> {
    this.productRepository = new ProductRepository();
    const result = await this.productRepository.getAll();
    return result;
  }
}
