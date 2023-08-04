import { createAction, props } from "@ngrx/store";
import { User } from "../../types/user.types";

export enum UserActionTypes {
  LOAD_USER_REQUEST = '[User] Load User Request',
  LOAD_USER_FAILURE = '[User] Load User Failure',
  LOAD_USER_SUCCESS = '[User] Load User Success',
}


export const loadUserRequestAction = createAction(
  UserActionTypes.LOAD_USER_REQUEST
)

export const loadUserSuccessAction = createAction(
  UserActionTypes.LOAD_USER_SUCCESS,
  props<{ user: User }>()
);

export const loadUserFailureAction = createAction(
  UserActionTypes.LOAD_USER_FAILURE,
  props<{ error: string }>()
);