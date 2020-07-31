import { Observable } from 'rxjs';
import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss'],
})
export class ProductTableComponent implements OnInit {
  public products: Product[];
  constructor(
    private productService: ProductsService,
    private spinner: NgxSpinnerService
  ) {}

  async ngOnInit(): Promise<void> {
    this.spinner.show();
    this.productService.getNeedUpdateValue().subscribe(async (value) => {
      if (value) {
        this.spinner.show();
        this.products = await this.productService.all();
      }
    });
    this.products = await this.productService.all();
    this.spinner.hide();
  }
}
