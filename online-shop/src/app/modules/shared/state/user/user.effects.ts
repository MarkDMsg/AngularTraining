import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { User } from "../../types/user.types";
import { loadUserFailureAction, loadUserRequestAction, loadUserSuccessAction } from "./user.actions";
@Injectable()
export class UserEffects {
  constructor(private autheticationService: AuthService, private actions$: Actions) { }

  loadUserRequestEffect$ = createEffect(() => this.actions$.pipe(
    ofType(loadUserRequestAction),
    switchMap(action => {
      return this.autheticationService.getUserProfile().pipe(
        map((user: User) => {
          return loadUserSuccessAction({ user })
        }),
        catchError(error => {
          return of(loadUserFailureAction({ error }))
        })
      )
    })
  ));
}