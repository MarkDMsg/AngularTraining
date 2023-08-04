import { ProductService } from "src/app/services/products.service";
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Injectable } from "@angular/core";
import { switchMap, map, catchError, of } from "rxjs";
import { loadProductsRequestAction, loadProductsSuccessAction, loadProductFailureAction, loadProductsFailureAction,loadProductRequestAction,loadProductSuccessAction, ProductActionTypes } from "./product.actions";
@Injectable()
export class ProductEffects {
  constructor(private productService: ProductService, private actions$: Actions) {}
 
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
          map((product: any) => {
              return loadProductSuccessAction({ product })
          }),
          catchError((error: any) => {
            return of(loadProductsFailureAction({ error }))
          })
        )
      })
  ))

}