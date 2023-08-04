import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/modules/shared/state/app.reducers';
import { loadProductsRequestAction } from 'src/app/modules/shared/state/product/product.actions';
import { getProducts } from 'src/app/modules/shared/state/product/product.reducers';
import { Product } from 'src/app/modules/shared/types/product.types';
import { User } from 'src/app/modules/shared/types/user.types';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html'
})
export class ProductsListComponent implements OnInit {

  products$!: Observable<Product[]>;
  user!: User;
  error$!: Observable<string>|null;
  isLoading$!: Observable<boolean>;
  
  constructor(private service: ProductService,
     private authenticationService: AuthService,
     private store$:Store<AppState>) { }

  ngOnInit(): void {
    this.loadProducts();
    this.initializeUser();
  }

  loadProducts():void{
    this.store$.dispatch(loadProductsRequestAction());
    this.products$=this.store$.select(getProducts);
  }

  initializeUser():void{
    this.authenticationService.getUserProfile().subscribe(u => {
      this.user = u;
      localStorage.setItem('userId', this.user.id!);
      let isAdmin = 'no';
      this.user.roles.forEach(role => {
        if (role === 'admin') {
          isAdmin = 'yes';
        }
      })
      localStorage.setItem('admin', isAdmin);
    });
  }

  addProductToCart(productToAdd: Product): void {
    this.service.addProductToCart(productToAdd);
  }

  logout(): void {
    this.authenticationService.logout();
  }

}
