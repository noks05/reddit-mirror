import { Reducer } from "react";
import { ActionCreator, AnyAction } from "redux";
import { ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS, MeRequestAction, MeRequestActionError, MeRequestActionSuccess } from "./me/actions";
import { MeState, meReducer } from "./reducer";

const UPDATE_COMMENT = "UPDATE_COMMENT"
type UpdateCommentAction = {
  type: typeof UPDATE_COMMENT
  text: string
}
export const updateComment: ActionCreator<UpdateCommentAction> = (text) => ({
  type: "UPDATE_COMMENT",
  text,
});

const TOKEN = "TOKEN"
type SetTokenAction = {
  type: typeof TOKEN
  text: string
}
export const updateToken: ActionCreator<SetTokenAction> = (text) => ({
  type: TOKEN,
  text,
});

export type RootState = {
  commentText: string;
  token: string;
  me: MeState;
}
const initialState: RootState = {
  commentText: "",
  token: "",
  me: {
    loading: false,
    error: '',
    data: {},
  },
}

type MyAction = UpdateCommentAction
  | SetTokenAction
  | MeRequestAction
  | MeRequestActionSuccess
  | MeRequestActionError
export const rootReducer: Reducer<RootState, MyAction> = (state: RootState = initialState, action: AnyAction) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        commentText: action.text,
      };
    case TOKEN:
      return {
        ...state,
        token: action.text,
      };
    case ME_REQUEST:
    case ME_REQUEST_SUCCESS:
    case ME_REQUEST_ERROR:
      return {
        ...state,
        me: meReducer(state.me, action),
      };
    default:
      return state;
  }
};

