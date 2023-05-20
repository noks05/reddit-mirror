import { useEffect } from "react";
import { saveToken } from "../store/me/actions";

export function useToken(store: any) {
  useEffect(() => {
    store.dispatch(saveToken());
  }, []);
}
