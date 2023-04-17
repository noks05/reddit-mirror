import React from "react";
import { useUserData } from "../../hooks/useUserData";

interface IPropsUserContextProvider {
  children: React.ReactNode;
}

interface IUserContextData {
  name?: string;
  iconImg?: string;
}
export const userContext = React.createContext<IUserContextData>({});

export function UserContextProvider({ children }: IPropsUserContextProvider) {
  const [data] = useUserData();

  return <userContext.Provider value={data}>{children}</userContext.Provider>;
}
