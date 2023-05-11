import React from "react";

interface ICommentsContextData {
  data?: any;
  isActive?: boolean;
  isMore?: boolean;
  setIsMore?: (isMore: boolean) => void;
  refBtnCurrent: HTMLDivElement | null;
}
export const commentsContext = React.createContext<ICommentsContextData>({
  refBtnCurrent: null,
});
