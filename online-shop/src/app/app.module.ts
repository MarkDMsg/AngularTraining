import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsDetailsComponent } from './components/containers/products-details/products-details.component';
import { ProductsListComponent } from './components/containers/products-list/products-list.component';
import { ProductsDetailsViewComponent } from './components/presentational/products-details-view/products-details-view.component';
import { ProductsListViewComponent } from './components/presentational/products-list-view/products-list-view.component';
import { IconButtonComponent } from './modules/shared/components/presentational/icon-button/icon-button.component';
import { ShoppingCartModule } from './modules/shopping-cart/shopping-cart.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsFormComponent } from './components/containers/products-form/products-form.component';
import { ProductsFormViewComponent } from './components/presentational/products-form-view/products-form-view.component';
import { ProductsEditComponent } from './components/containers/products-edit/products-edit.component';
import { ProductsEditViewComponent } from './components/presentational/products-edit-view/products-edit-view.component';
import { ProductsAddViewComponent } from './components/presentational/products-add-view/products-add-view.component';
import { ProductsAddComponent } from './components/containers/products-add/products-add.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductsDetailsComponent,
    ProductsListViewComponent,
    ProductsDetailsViewComponent,
    ProductsFormViewComponent,
    ProductsFormComponent,
    ProductsEditComponent,
    ProductsEditViewComponent,
    ProductsAddViewComponent,
    ProductsAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShoppingCartModule,
    IconButtonComponent,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
