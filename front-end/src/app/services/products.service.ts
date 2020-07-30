import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private baseUrl = 'http://localhost:3333';

  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  public async all(): Promise<Product[]> {
    const products = await this.httpClient
      .get<Product[]>(`${this.baseUrl}/product/`)
      .toPromise();
    return products;
  }

  public async getProduct({ id }: Product) {
    const product = await this.httpClient
      .get<Product>(`${this.baseUrl}/product/${id}`)
      .toPromise();
    return product;
  }
}
