import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/modules/shared/state/app.reducers';
import { loadProductRequestAction } from 'src/app/modules/shared/state/product/product.actions';
import { getProduct } from 'src/app/modules/shared/state/product/product.reducers';
import { Product } from 'src/app/modules/shared/types/product.types';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html'
})
export class ProductsDetailsComponent implements OnInit {
  product$ !: Observable<Product | null>;
  constructor(
    private route: ActivatedRoute,
    private service: ProductService,
    private store$: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.store$.dispatch(loadProductRequestAction({ id }));
    this.product$ = this.store$.select(getProduct);
  }

  deleteProduct(id: string): void {
    this.service.deleteProduct(id);
  }

}
