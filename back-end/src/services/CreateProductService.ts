import ProductRepository from "src/repositories/ProductRepository";
import Product from "@models/Product";

export default class CreateProductService {
  private productRepository: ProductRepository;

  public async execute(products: Product[]): Promise<Product[]> {
    this.productRepository = new ProductRepository();
    const result = await this.productRepository.createMany(products);
    return result;
  }
}
