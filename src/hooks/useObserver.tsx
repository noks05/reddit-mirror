import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, setCountLoad } from "../store/store";

export function useObserver(
  observableEl: React.MutableRefObject<HTMLDivElement | null>,
  nextAfter?: string,
  load?: () => Promise<void>
) {
  const countLoad = useSelector<RootState, number>((state) => state.countLoad);
  const dispatch = useDispatch();
  const [loadMore, setLoadMore] = useState(false);

  function createObserver() {
    const observerObj = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          switch (countLoad) {
            case 0:
            case 1:
              load && load();
              dispatch(setCountLoad(countLoad + 1));
              break;
            case 2:
              setLoadMore(true);
          }
        }
      },
      { rootMargin: "50px" }
    );

    if (observableEl && observableEl.current) {
      observerObj.observe(observableEl.current);
    }

    return observerObj;
  }

  useEffect(() => {
    const observer = createObserver();

    return () => {
      if (observableEl && observableEl.current) {
        observer.unobserve(observableEl.current);
      }
    };
  }, [nextAfter]);

  return { setLoadMore, loadMore };
}
