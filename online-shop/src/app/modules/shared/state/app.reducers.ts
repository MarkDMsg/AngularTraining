import { createReducer, createSelector, on } from "@ngrx/store";
import { Product } from "../types/product.types";
import { User } from "../types/user.types";
import * as ProductActionTypes from '../state/product/product.actions';
import { UserState, initialUserState, userFeatureName } from "./user/user.reducers";
import { ProductState, initialProductState, productFeatureName } from "./product/product.reducers";

export interface AppState {
    [productFeatureName]: ProductState;
    [userFeatureName]: UserState;
}

export const initialState: AppState = {
    products: initialProductState,
    user: initialUserState
}
