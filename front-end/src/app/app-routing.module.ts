import { HomeComponent } from './home/home.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'edit/:productId', component: EditProductComponent },
  { path: 'delete/:productId', component: DeleteProductComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
