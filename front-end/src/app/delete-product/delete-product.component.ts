import {
  FormGroup,
  FormControl,
  Validator,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss'],
})
export class DeleteProductComponent implements OnInit {
  private productId: string;
  public product: Product;
  public editProductFormGroup: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductsService
  ) {
    this.route.params.subscribe((res) => (this.productId = res.productId));
    this.editProductFormGroup = new FormGroup({});
  }

  async ngOnInit(): Promise<void> {
    this.productService.getNeedUpdateValue().subscribe(async (value) => {
      if (value) {
        this.product = this.product = await this.productService.getProduct(
          this.productId
        );
      }
    });
    this.product = await this.productService.getProduct(this.productId);
  }

  async submit(): Promise<void> {
    if (this.editProductFormGroup.valid) {
      await this.productService.deleteProduct(this.productId);
      this.router.navigate(['/']);
    }
  }
}
