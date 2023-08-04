import { ProductService } from "src/app/services/products.service";
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Injectable } from "@angular/core";
import { switchMap, map, catchError, of } from "rxjs";
@Injectable()
export class UserEffects {
  constructor(private productService: ProductService, private actions$: Actions) {}
 
}