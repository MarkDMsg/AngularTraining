import { createReducer, createSelector, on } from "@ngrx/store";
import { User } from "../../types/user.types";
import { AppState } from "../app.reducers";
import * as UserActionTypes from './user.actions';

export const userFeatureName = 'user';

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
    on(UserActionTypes.loadUserRequestAction, (state) => ({
        ...state,
        isLoading: true
    })),

    on(UserActionTypes.loadUserSuccessAction, (state, { user }) => ({
        ...state,
        isLoading: false,
        user: user
    })),

    on(UserActionTypes.loadUserFailureAction, (state, { error }) => ({
        ...state,
        isLoading: false,
        error: error
    })),
);

const UserFeature = (state: AppState) => {
    return state.user
};

export const getUser = createSelector(
    UserFeature,
    (state: UserState) => state.user
);
