import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent implements OnInit {
  private productId: string;
  public product: Product;
  public editProductFormGroup: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductsService
  ) {
    this.route.params.subscribe((res) => (this.productId = res.productId));
    this.editProductFormGroup = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      price: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      rating: new FormControl('', [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
    });
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
    this.editProductFormGroup.patchValue(this.product);
  }

  async submit(): Promise<void> {
    if (this.editProductFormGroup.valid) {
      const values = this.editProductFormGroup.value;
      await this.productService.updateProduct(values, this.productId);
      this.router.navigate(['/']);
    }
  }

  get title(): AbstractControl {
    return this.editProductFormGroup.get('title');
  }
  get price(): AbstractControl {
    return this.editProductFormGroup.get('price');
  }
  get description(): AbstractControl {
    return this.editProductFormGroup.get('description');
  }
  get type(): AbstractControl {
    return this.editProductFormGroup.get('type');
  }
  get rating(): AbstractControl {
    return this.editProductFormGroup.get('rating');
  }
}
