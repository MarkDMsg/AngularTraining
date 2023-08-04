import { createReducer, createSelector, on } from "@ngrx/store";
import { Product } from "../types/product.types";
import { User } from "../types/user.types";
import * as AppActionTypes from './app.actions';

export const productFeatureName='products';
export interface AppState {
    [productFeatureName]: ProductState;
    user: UserState;
}

export interface ProductState {
    products: Product[];
    error: string | null;
    isLoading?: boolean; 
    selectedProduct: Product|null,
}

export interface UserState {
    user?: User;
    error: string | null;
    isLoading?: boolean; 
}

export const initialProductState: ProductState = {
    products: [],
    error: null,
    isLoading: false,
    selectedProduct: null
}


export const initialUserState: UserState = {
    user: undefined,
    error: null,
    isLoading: false 
}

export const initialState: AppState = {
    products: initialProductState,
    user: initialUserState
}


export const productsReducer = createReducer(
    initialProductState,
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

    on(AppActionTypes.loadProductsRequestAction, (state) => ({
        ...state,
        isLoading: true
    })),

    on(AppActionTypes.loadProductsSuccessAction, (state, { items }) => ({
        ...state,
        isLoading: false,
        products: items
    })),

    on(AppActionTypes.loadProductsFailureAction, (state, { error }) => ({
        ...state,
        isLoading: false,
        error: error
    })),

    on(AppActionTypes.saveRequestAction, state => ({
        ...state,
        isLoading: true
    })),

    on(AppActionTypes.saveSuccessAction, (state, { item }) => ({
        ...state,
        isLoading: false,
        selectedProduct: item,
        error: null
    })),

    on(AppActionTypes.saveFailureAction, (state, { error }) => ({
        ...state,
        isLoading: false,
        error: error
    }))
);

const ProductFeature = (state: AppState) => {
    return state.products
};

export const getProducts = createSelector(
    ProductFeature,
    (state: ProductState) => state.products
);

// export const getProduct = createSelector(
//     ProductFeature,
//     (state: ProductState, id: string) => state.products.filter(x => x.id === id)
// );

export const getSelectedProduct = createSelector(
    ProductFeature,
    (state: ProductState) => state.selectedProduct
);

export const getProductError = createSelector(
    ProductFeature,
    (state: ProductState) => state.error
);

export const getProductIsLoading = createSelector(
    ProductFeature,
    (state: ProductState) => state.isLoading
);