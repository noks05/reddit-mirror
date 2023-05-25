import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { IUserData, meRequestAsync } from "../store/me/actions";

export function useUserData() {
  const data = useSelector<RootState, IUserData>((state) => state.me.data);
  const loading = useSelector<RootState, boolean>((state) => state.me.loading);
  const token = useSelector<RootState>((state) => state.token);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!token || token === "undefined") return;
    dispatch(meRequestAsync() as any);
  }, [token]);

  return { data, loading };
}
