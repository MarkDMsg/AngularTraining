import { createAction, props } from "@ngrx/store";
import { User } from "../../types/user.types";
import { Product } from "../../types/product.types";

export enum ProductActionTypes {
    LOAD_PRODUCT_REQUEST = '[Product] Load Product Request',
    LOAD_PRODUCT_FAILURE = '[Product] Load Product Failure',
    LOAD_PRODUCT_SUCCESS = '[Product] Load Product Success',

    LOAD_REQUEST = '[Product] Load Request',
    LOAD_FAILURE = '[Product] Load Failure',
    LOAD_SUCCESS = '[Product] Load Success',

    SAVE_REQUEST = '[Product] Save',
    SAVE_FAILURE = '[Product] Save Failure',
    SAVE_SUCCESS = '[Product] Save Success',

    UPDATE_REQUEST = '[Product] Update',
    UPDATE_FAILURE = '[Product] Update Failure',
    UPDATE_SUCCESS = '[Product] Update Success',

    DELETE_REQUEST = '[Product] Delete',
    DELETE_FAILURE = '[Product] Delete Failure',
    DELETE_SUCCESS = '[Product] Delete Success'
}

export const loadProductRequestAction = createAction(
  ProductActionTypes.LOAD_PRODUCT_REQUEST,
    props<{ id: string }>()
)

export const loadProductSuccessAction = createAction(
  ProductActionTypes.LOAD_PRODUCT_SUCCESS,
    props<{ product: Product }>()
);

export const loadProductFailureAction = createAction(
  ProductActionTypes.LOAD_PRODUCT_FAILURE,
    props<{ error: string }>()
);

///////
 
export const loadProductsRequestAction = createAction(
  ProductActionTypes.LOAD_REQUEST
  );
   
  export const loadProductsFailureAction = createAction(
    ProductActionTypes.LOAD_FAILURE,
    props<{ error: string }>()
  );
   
  export const loadProductsSuccessAction = createAction(
    ProductActionTypes.LOAD_SUCCESS,
    props<{ items: Product[] }>()
  );