import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastService, AngularToastifyModule } from 'angular-toastify';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxSpinnerModule } from 'ngx-spinner';

import { NavBarComponent } from './nav-bar/nav-bar.component';

import { ProductTableComponent } from './product-table/product-table.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { HomeComponent } from './home/home.component';
import { UploadProductsComponent } from './upload-products/upload-products.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductTableComponent,
    EditProductComponent,
    HomeComponent,
    UploadProductsComponent,
    DeleteProductComponent,
  ],
  imports: [
    CommonModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularToastifyModule,
  ],
  exports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [ToastService],
  bootstrap: [AppComponent],
})
export class AppModule {}
