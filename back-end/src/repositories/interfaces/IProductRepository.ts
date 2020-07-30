import Product from "@models/Product";
import CreateProductDTO from "../DTOS/CreateProductDTO";
import UpdateProductDTO from "../DTOS/UpdateProductDTO";

export default interface IProductRepository {
  getAll(): Promise<Product[]>;
  createOne(data: CreateProductDTO): Promise<Product>;
  createMany(data: CreateProductDTO[]): Promise<Product[]>;
  update(product: Product): Promise<Product>;
  findOrFail(productId: string): Promise<Product>;
  remove(productId: string): Promise<void>;
}
