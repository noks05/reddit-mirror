import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateToken } from "../store";

export function useToken() {
  const dispatch = useDispatch();

  function setToken(windowToken: string) {
    dispatch(updateToken(windowToken));
  }

  useEffect(() => {
    if (typeof window !== undefined) {
      setToken(window.__token__);
    }
  }, []);
}
