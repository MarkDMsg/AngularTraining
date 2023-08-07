import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './components/containers/products-list/products-list.component';
import { ProductsDetailsComponent } from './components/containers/products-details/products-details.component';
import { ShoppingCartDetailsComponent } from './modules/shopping-cart/components/containers/shopping-cart-details/shopping-cart-details.component';
import { ProductsFormComponent } from './components/containers/products-form/products-form.component';
import { ProductsEditComponent } from './components/containers/products-edit//products-edit.component';
import { ProductsAddComponent } from './components/containers/products-add/products-add.component';
import { LoginViewComponent } from './components/presentational/login-view/login-view.component';
import { authGuard } from './guards/auth.guard';
const routes: Routes = [
  { path: '', component:LoginViewComponent },
  { path: 'products', component:ProductsListComponent,canActivate: [authGuard] },
  { path: 'detail/:id', component: ProductsDetailsComponent },
  { path: 'add', component: ProductsAddComponent },
  { path: 'shopping-cart', component: ShoppingCartDetailsComponent, canActivate: [authGuard] },
  { path: 'edit/:id', component: ProductsEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
