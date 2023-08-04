import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/modules/shared/state/app.reducers';
import { loadProductsRequestAction } from 'src/app/modules/shared/state/product/product.actions';
import { getProducts } from 'src/app/modules/shared/state/product/product.reducers';
import { loadUserRequestAction } from 'src/app/modules/shared/state/user/user.actions';
import { getUser } from 'src/app/modules/shared/state/user/user.reducers';
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
  user$!: Observable<User | undefined>;
  user?: User;
  error$!: Observable<string> | null;
  isLoading$!: Observable<boolean>;

  constructor(private service: ProductService,
    private authenticationService: AuthService,
    private store$: Store<AppState>) { }

  ngOnInit(): void {
    this.loadUser();
    this.loadProducts();
    this.initializeUserData();
  }

  loadProducts(): void {
    this.store$.dispatch(loadProductsRequestAction());
    this.products$ = this.store$.select(getProducts);
  }

  loadUser(): void {
    this.store$.dispatch(loadUserRequestAction());
    this.user$ = this.store$.select(getUser);
    this.user$.subscribe(u =>{
      this.user = u;
      this.initializeUserData();
    } );
  }

  initializeUserData(): void {
      if (this.user) {
        localStorage.setItem('userId', this.user.id!);
        let isAdmin = false;
        this.user.roles.forEach(role => {
          if (role === 'admin') {
            isAdmin = true;
          }
        })
        localStorage.setItem('admin', JSON.stringify(isAdmin) );
      }
  }

  addProductToCart(productToAdd: Product): void {
    this.service.addProductToCart(productToAdd);
  }

  logout(): void {
    this.authenticationService.logout();
  }

}
