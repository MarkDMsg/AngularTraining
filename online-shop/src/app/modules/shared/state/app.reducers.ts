import { ProductState, initialProductState, productFeatureName } from "./product/product.reducers";
import { UserState, initialUserState, userFeatureName } from "./user/user.reducers";

export interface AppState {
    [productFeatureName]: ProductState;
    [userFeatureName]: UserState;
}

export const initialState: AppState = {
    products: initialProductState,
    user: initialUserState
}
