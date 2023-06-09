import { Action, ActionCreator } from "redux"
import { ThunkAction } from "redux-thunk"
import { RootState, setToken } from "../store"
import axios from "axios"

export const ME_REQUEST = 'ME_REQUEST'
export type MeRequestAction = {
  type: typeof ME_REQUEST
}

export const meRequest: ActionCreator<MeRequestAction> = () => ({
  type: ME_REQUEST
})



export interface IUserData {
  name?: string;
  iconImg?: string;
}

export const ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS'
export type MeRequestActionSuccess = {
  type: typeof ME_REQUEST_SUCCESS,
  data: IUserData,
}

export const meRequestSuccess: ActionCreator<MeRequestActionSuccess> = (data: IUserData) => ({
  type: ME_REQUEST_SUCCESS,
  data,
})



export const ME_REQUEST_ERROR = 'ME_REQUEST_ERROR'
export type MeRequestActionError = {
  type: typeof ME_REQUEST_ERROR,
  error: string,
}

export const meRequestError: ActionCreator<MeRequestActionError> = (error: string) => ({
  type: ME_REQUEST_ERROR,
  error,
})



export const meRequestAsync = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  dispatch(meRequest());
  axios
    .get("https://oauth.reddit.com/api/v1/me", {
      headers: { Authorization: `bearer ${getState().token}` },
    })
    .then((resp) => {
      const userData = resp.data;
      dispatch(meRequestSuccess({ name: userData.name, iconImg: userData.icon_img }));
    })
    .catch((error) => {
      console.log(error);
      dispatch(meRequestError(String(error)));
    });
}


export const saveToken = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
  function getToken() {
    const checkToken =
      typeof window !== undefined &&
      window.__token__ !== "undefined" &&
      window.__token__;

    const resp = checkToken || localStorage.getItem("token");
    return resp;
  }
  const token = getToken();
  if (token) {
    dispatch(setToken(token));
    localStorage.setItem("token", token);
  }
}
