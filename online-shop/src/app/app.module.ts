import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
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
import { LoginViewComponent } from './components/presentational/login-view/login-view.component';
import { JwtInterceptor } from './interceptors/auth.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { productFeatureName, productsReducer } from './modules/shared/state/product/product.reducers';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './modules/shared/state/product/product.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
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
    ProductsAddComponent,
    LoginViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShoppingCartModule,
    IconButtonComponent,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    StoreModule.forRoot({[productFeatureName]:productsReducer}),
    EffectsModule.forRoot([ProductEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    })
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    ProductEffects],
  bootstrap: [AppComponent]
})
export class AppModule { }
