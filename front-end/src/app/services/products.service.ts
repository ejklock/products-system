import { ToastService } from 'angular-toastify';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/product';
import ApiResponse from '../dtos/response';
import AppError from '../dtos/appError';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(
    private httpClient: HttpClient,
    private toastService: ToastService
  ) {
    this.needUpdateData = new BehaviorSubject<boolean>(false);
  }
  private baseUrl = 'http://localhost:3333';
  private formData: FormData;
  private needUpdateData: BehaviorSubject<boolean>;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  setNeedUpdateValue(newValue): void {
    this.needUpdateData.next(newValue);
  }

  getNeedUpdateValue(): Observable<boolean> {
    return this.needUpdateData.asObservable();
  }

  public async all(): Promise<Product[]> {
    try {
      const products = await this.httpClient
        .get<Product[]>(`${this.baseUrl}/product/`)
        .toPromise();
      this.setNeedUpdateValue(false);
      return products;
    } catch (err) {
      const {
        error: { message },
      } = err;
      this.toastService.error(message);
    }
  }

  public async createProducts(products: File): Promise<void> {
    try {
      if (products.type === 'application/json') {
        this.formData = new FormData();
        this.formData.append('products', products, products.name);
        const result = (await this.httpClient
          .post(`${this.baseUrl}/product/createMany`, this.formData)
          .toPromise()) as ApiResponse;
        this.toastService.success(result.message);
        this.setNeedUpdateValue(true);
      } else {
        throw new AppError('O tipo de arquivo deve ser no formato JSON', 402);
      }
    } catch (err) {
      if (err instanceof AppError) {
        this.toastService.error(err.message);
      } else {
        this.toastService.error('O Arquivo JSON não está no formato correto');
      }
    }
  }

  public async updateProduct(product: Product, id: string): Promise<Product> {
    try {
      const result = await this.httpClient
        .put<Product>(`${this.baseUrl}/product/${id}`, product)
        .toPromise();
      this.toastService.success('Produto atualizado com sucesso');
      return result;
    } catch (err) {
      const {
        error: { message },
      } = err;
      this.toastService.error(message);
    }
  }

  public async getProduct(id: string): Promise<Product> {
    try {
      const result = await this.httpClient
        .get<Product>(`${this.baseUrl}/product/${id}`)
        .toPromise();

      return result;
    } catch (err) {
      const {
        error: { message },
      } = err;
      this.toastService.error(message);
    }
  }

  public async deleteProduct(id: string): Promise<void> {
    try {
      const result = (await this.httpClient
        .delete(`${this.baseUrl}/product/${id}`)
        .toPromise()) as ApiResponse;
      this.toastService.success(result.message);
    } catch (err) {
      const {
        error: { message },
      } = err;
      this.toastService.error(message);
    }
  }
}
