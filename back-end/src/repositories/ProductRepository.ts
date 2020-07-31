import { getRepository, Repository } from "typeorm";
import IProductRepository from "./interfaces/IProductRepository";
import Product from "../models/Product";
import CreateProductDTO from "./DTOS/CreateProductDTO";
import UpdateProductDTO from "./DTOS/UpdateProductDTO";

export default class ProductRepository implements IProductRepository {
  private repository: Repository<Product>;
  constructor() {
    this.repository = getRepository(Product);
  }
  public async remove(productId: string): Promise<void> {
    const product = await this.repository.findOneOrFail(productId);
    await this.repository.remove(product);
  }
  public async createMany(data: CreateProductDTO[]): Promise<Product[]> {
    const productArr = this.repository.create(data);
    const products = await this.repository.save(productArr);
    return products;
  }
  public async update(data: UpdateProductDTO): Promise<Product> {
    const product = await this.repository.findOneOrFail(data.id);
    this.repository.merge(product, data);
    const result = await this.repository.save(product);
    return result;
  }

  public async createOne({
    title,
    description,
    type,
    height,
    filename,
    price,
    rating,
    width,
    created,
  }: CreateProductDTO): Promise<Product> {
    const product = this.repository.create({
      title,
      type,
      description,
      filename,
      height,
      price,
      rating,
      width,
    });
    await this.repository.save(product);
    return product;
  }
  public async findOrFail(productId: string): Promise<Product> {
    const product = await this.repository.findOneOrFail(productId);
    return product;
  }
  public async getAll(): Promise<Product[]> {
    const products = await this.repository.find();
    return products;
  }
}
