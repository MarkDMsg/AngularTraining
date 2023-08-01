import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './components/containers/products-list/products-list.component';
import { ProductsDetailsComponent } from './components/containers/products-details/products-details.component';
import { ShoppingCartDetailsComponent } from './modules/shopping-cart/components/containers/shopping-cart-details/shopping-cart-details.component';

const routes: Routes = [
  { path: '', component:ProductsListComponent },
  { path: 'detail/:id', component: ProductsDetailsComponent },
  { path: 'added-to-cart/:id', component: ShoppingCartDetailsComponent },
  { path: 'shopping-cart', component: ShoppingCartDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
