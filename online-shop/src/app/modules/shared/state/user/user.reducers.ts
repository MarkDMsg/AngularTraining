import { createReducer, createSelector, on } from "@ngrx/store";
import { Product } from "../../types/product.types";
import { User } from "../../types/user.types";
import * as AppActionTypes from './user.actions';
import { AppState } from "../app.reducers";

export const userFeatureName='user';

export interface UserState {
    user?: User;
    error: string | null;
    isLoading?: boolean; 
}

export const initialUserState: UserState = {
    user: undefined,
    error: null,
    isLoading: false 
}


export const userReducer = createReducer(
    initialUserState,
    // on(AppActionTypes.loadProductsRequestAction, (state, { id }) => ({
    //     ...state,
    //     isLoading: true
    // })),

    // on(AppActionTypes.loadProductsSuccessAction, (state, { product }) => ({
    //     ...state,
    //     isLoading: false,
    //     selectedProduct: product
    // })),

    // on(AppActionTypes.loadProductFailureAction, (state, { error }) => ({
    //     ...state,
    //     isLoading: false,
    //     error: error
    // })),

    // 
);

const UserFeature = (state: AppState) => {
    return state.products
};


// export const getProduct = createSelector(
//     ProductFeature,
//     (state: ProductState, id: string) => state.products.filter(x => x.id === id)
// );
