import { Reducer } from "react"
import { MeRequestAction, MeRequestActionSuccess, MeRequestActionError, ME_REQUEST, ME_REQUEST_SUCCESS, ME_REQUEST_ERROR, IUserData } from "./me/actions"

export type MeState = {
  loading: boolean,
  error: string,
  data: IUserData;
}
type MyAction =
  MeRequestAction
  | MeRequestActionSuccess
  | MeRequestActionError
export const meReducer: Reducer<MeState, MyAction> = (state, action) => {
  switch (action.type) {
    case ME_REQUEST:
      return {
        ...state,
        loading: true
      };
    case ME_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case ME_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data
      };
    default:
      return state;
  }
}
