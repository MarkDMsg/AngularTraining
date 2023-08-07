import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from "rxjs";
import { ProductService } from "src/app/services/products.service";
import { Product } from "../../types/product.types";
import { loadProductSuccessAction, loadProductsFailureAction, loadProductsRequestAction, loadProductsSuccessAction } from "./product.actions";
@Injectable()
export class ProductEffects {
  constructor(private productService: ProductService, private actions$: Actions) { }

  loadProductsRequestEffect$ = createEffect(() => this.actions$.pipe(
    ofType(loadProductsRequestAction),
    switchMap(action => {
      return this.productService.getProducts().pipe(
        map((items: any[]) => {
          return loadProductsSuccessAction({ items })
        }),
        catchError(error => {
          return of(loadProductsFailureAction({ error }))
        })
      )
    })
  ));

  loadProductRequestEffect$ = createEffect(() => this.actions$.pipe(
    ofType(loadProductSuccessAction),
    switchMap(action => {
      return this.productService.getProductById(action.product.id!).pipe(
        map((product: Product) => {
          return loadProductSuccessAction({ product })
        }),
        catchError((error: any) => {
          return of(loadProductsFailureAction({ error }))
        })
      )
    })
  ))

}