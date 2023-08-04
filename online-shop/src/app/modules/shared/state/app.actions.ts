import { createAction, props } from "@ngrx/store";
import { User } from "../types/user.types";
import { Product } from "../types/product.types";

export enum ActionTypes {
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
    ActionTypes.LOAD_PRODUCT_REQUEST,
    props<{ id: string }>()
)

export const loadProductSuccessAction = createAction(
    ActionTypes.LOAD_PRODUCT_SUCCESS,
    props<{ product: Product }>()
);

export const loadProductFailureAction = createAction(
    ActionTypes.LOAD_PRODUCT_FAILURE,
    props<{ error: string }>()
);

///////
 
export const loadProductsRequestAction = createAction(
    ActionTypes.LOAD_REQUEST
  );
   
  export const loadProductsFailureAction = createAction(
    ActionTypes.LOAD_FAILURE,
    props<{ error: string }>()
  );
   
  export const loadProductsSuccessAction = createAction(
    ActionTypes.LOAD_SUCCESS,
    props<{ items: Product[] }>()
  );
   
  export const saveRequestAction = createAction(
    ActionTypes.SAVE_REQUEST,
    props<{ item: Product }>()
  );
   
  export const saveFailureAction = createAction(
    ActionTypes.SAVE_FAILURE,
    props<{ error: string }>()
  );
   
  export const saveSuccessAction = createAction(
    ActionTypes.SAVE_SUCCESS,
    props<{ item: Product }>()
  );

  export const updateRequestAction = createAction(
    ActionTypes.UPDATE_REQUEST,
    props<{ item: Product }>()
  );
   
  export const updateFailureAction = createAction(
    ActionTypes.UPDATE_FAILURE,
    props<{ error: string }>()
  );
   
  export const updateSuccessAction = createAction(
    ActionTypes.UPDATE_SUCCESS,
    props<{ item: Product }>()
  );
     
  export const deleteRequestAction = createAction(
    ActionTypes.DELETE_REQUEST,
    props<{ id: string }>()
  );
   
  export const deleteFailureAction = createAction(
    ActionTypes.DELETE_FAILURE,
    props<{ error: string }>()
  );
     
  export const deleteSuccessAction = createAction(
    ActionTypes.DELETE_SUCCESS,
    props<{ id: string }>()
  );