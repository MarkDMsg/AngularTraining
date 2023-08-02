import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './components/containers/products-list/products-list.component';
import { ProductsDetailsComponent } from './components/containers/products-details/products-details.component';
import { ShoppingCartDetailsComponent } from './modules/shopping-cart/components/containers/shopping-cart-details/shopping-cart-details.component';
import { ProductsFormComponent } from './components/containers/products-form/products-form.component';
import { ProductsEditComponent } from './components/containers/products-edit//products-edit.component';
import { ProductsAddComponent } from './components/containers/products-add/products-add.component';

const routes: Routes = [
  { path: '', component:ProductsListComponent },
  { path: 'detail/:id', component: ProductsDetailsComponent },
  { path: 'add', component: ProductsAddComponent },
  { path: 'shopping-cart', component: ShoppingCartDetailsComponent },
  { path: 'edit/:id', component: ProductsEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
