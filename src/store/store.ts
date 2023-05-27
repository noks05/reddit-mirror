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
export const setToken: ActionCreator<SetTokenAction> = (text) => ({
  type: TOKEN,
  text,
});

const COUNT_LOAD = "COUNT_LOAD"
type SetCountLoadAction = {
  type: typeof COUNT_LOAD
  number: number
}
export const setCountLoad: ActionCreator<SetCountLoadAction> = (number) => ({
  type: COUNT_LOAD,
  number,
});

export type RootState = {
  commentText: string;
  token: string;
  me: MeState;
  countLoad: number;
}
const initialState: RootState = {
  commentText: "",
  token: "",
  countLoad: 0,
  me: {
    loading: false,
    error: '',
    data: {},
  },
}

type MyAction = UpdateCommentAction
  | SetTokenAction
  | SetCountLoadAction
  | MeRequestAction
  | MeRequestActionSuccess
  | MeRequestActionError
export const rootReducer = (state: RootState = initialState, action: MyAction) => {
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
    case COUNT_LOAD:
      return {
        ...state,
        countLoad: action.number,
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

