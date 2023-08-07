import { createReducer, createSelector, on } from "@ngrx/store";
import { Product } from "../../types/product.types";
import * as ProductActionTypes from './product.actions';
import { AppState } from "../app.reducers";

export const productFeatureName = 'products';

export interface ProductState {
    products: Product[];
    error: string | null;
    isLoading?: boolean;
    selectedProduct: Product | null,
}

export const initialProductState: ProductState = {
    products: [],
    error: null,
    isLoading: false,
    selectedProduct: null
}

export const productsReducer = createReducer(
    initialProductState,
    on(ProductActionTypes.loadProductRequestAction, (state, { id }) => ({
        ...state,
        isLoading: true
    })),

    on(ProductActionTypes.loadProductSuccessAction, (state, { product }) => ({
        ...state,
        isLoading: false,
        selectedProduct: product
    })),

    on(ProductActionTypes.loadProductFailureAction, (state, { error }) => ({
        ...state,
        isLoading: false,
        error: error
    })),

    on(ProductActionTypes.loadProductsRequestAction, (state) => ({
        ...state,
        isLoading: true
    })),

    on(ProductActionTypes.loadProductsSuccessAction, (state, { items }) => ({
        ...state,
        isLoading: false,
        products: items
    })),

    on(ProductActionTypes.loadProductsFailureAction, (state, { error }) => ({
        ...state,
        isLoading: false,
        error: error
    })),

);

const ProductFeature = (state: AppState) => {
    return state.products
};

export const getProducts = createSelector(
    ProductFeature,
    (state: ProductState) => state.products
);

export const getProduct = createSelector(
    ProductFeature,
    (state: ProductState) => state.selectedProduct
);
