import { ProductService } from "src/app/services/products.service";
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Injectable } from "@angular/core";
import { switchMap, map, catchError, of } from "rxjs";
import {  loadProductsFailureAction, loadProductsRequestAction, loadProductsSuccessAction, saveRequestAction } from "./app.actions";
@Injectable()
export class ProductEffects {
  constructor(private productService: ProductService, private actions$: Actions) {}
  
//   loadProductRequestEffect$ = createEffect(() => this.actions$.pipe(
//     ofType(loadProductsRequestAction),
//       switchMap(action => {
//         return this.productService.getProductById(action.id).pipe(
//           map((product: any) => {
//               return loadProductsSuccessAction({ product })
//           }),
//           catchError((error: any) => {
//             return of(loadProductFailureAction({ error }))
//           })
//         )
//       })
//   ))
 
  loadRequestEffect$ = createEffect(() => this.actions$.pipe(
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
  ))
 
//   saveRequestEffect$ = createEffect(() => this.actions$.pipe(
//     ofType(saveRequestAction),
//       switchMap(action => {     
//         return this.dataService.saveBook(action.item).pipe(
//           map((item: any) => {
//               return bookActions.saveSuccessAction({ item })
//           }),
//           catchError(error => {
//             return observableOf(bookActions.saveFailureAction({ error }))
//           })
//         )
//       })
//   ))
}