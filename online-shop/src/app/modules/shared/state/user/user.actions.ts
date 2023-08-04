import { createAction, props } from "@ngrx/store";
import { User } from "../../types/user.types";
import { Product } from "../../types/product.types";

export enum UserActionTypes {
    LOAD_USER_REQUEST = '[User] Load User Request',
    LOAD_USER_FAILURE = '[User] Load User Failure',
    LOAD_USER_SUCCESS = '[User] Load User Success',
}

export const loadProductRequestAction = createAction(
  UserActionTypes.LOAD_USER_REQUEST,
    props<{ id: string }>()
)
