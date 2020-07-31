import { ProductsService } from './../services/products.service';
import {
  Component,
  ViewChild,
  ElementRef,
  OnInit,
  HostListener,
} from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import ApiResponse from '../dtos/response';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-upload-products',
  templateUrl: './upload-products.component.html',
  styleUrls: ['./upload-products.component.scss'],
})
export class UploadProductsComponent {
  private file: File | null = null;

  uploadProductForm = new FormGroup({
    productfile: new FormControl(null, [Validators.required]),
  });
  success = false;

  @ViewChild('productFileInput') productFileInput: ElementRef;

  constructor(
    private productService: ProductsService,
    private spinner: NgxSpinnerService
  ) {}

  // escuta por mudança de estado no input de arquivo
  @HostListener('change', ['$event.target.files'])
  emitFiles(event: FileList): void {
    const file = event && event.item(0);
    this.file = file;
  }

  async submit(): Promise<void> {
    this.spinner.show();
    await this.productService.createProducts(this.file);
    this.spinner.hide();
    this.file = null;
    this.uploadProductForm.reset();
  }
}
