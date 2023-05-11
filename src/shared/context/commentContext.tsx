import React from "react";

interface ICommentContextData {
  isForm?: boolean;
  setIsForm?: (isActive: boolean) => void;
}
export const commentContext = React.createContext<ICommentContextData>({});
