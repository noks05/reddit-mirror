import { useEffect } from "react";
import { updateToken } from "../store/store";

export function useToken(store: any) {
  function setToken(windowToken: string) {
    store.dispatch(updateToken(windowToken));
  }

  useEffect(() => {
    const checkToken =
      typeof window !== undefined &&
      window.__token__ !== "undefined" &&
      window.__token__;

    const token = checkToken || localStorage.getItem("token");
    if (token) {
      setToken(token);
      localStorage.setItem("token", token);
    }
  }, []);
}
