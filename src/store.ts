import { ActionCreator, AnyAction } from "redux";

export const updateComment: ActionCreator<AnyAction> = (text) => ({
  type: "UPDATE_COMMENT",
  text,
});

export const updateToken: ActionCreator<AnyAction> = (text) => ({
  type: "TOKEN",
  text,
});
export type RootState = {
  commentText: string;
  token: string;
}

const initialState: RootState = {
  commentText: "",
  token: "",
}

export const rootReducer = (state: RootState = initialState, action: AnyAction) => {
  switch (action.type) {
    case "UPDATE_COMMENT":
      return {
        ...state,
        commentText: action.text,
      };
    case "TOKEN":
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};

