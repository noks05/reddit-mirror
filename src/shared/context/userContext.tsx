import React from "react";
import { useUserData } from "../../hooks/useUserData";

interface IPropsUserContextProvider {
  children: React.ReactNode;
}

interface IUserContextData {
  data: { name?: string; iconImg?: string };
  loading: boolean;
}
export const userContext = React.createContext<IUserContextData>({
  data: {},
  loading: false,
});

export function UserContextProvider({ children }: IPropsUserContextProvider) {
  const { data, loading } = useUserData();

  return (
    <userContext.Provider value={{ data, loading }}>
      {children}
    </userContext.Provider>
  );
}
