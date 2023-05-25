import { useEffect } from "react";

export function useObserver(
  observableEl: HTMLDivElement | null,
  load: () => Promise<void>,
  countLoad: number,
  setCountLoad: (el: number) => void,
  setLoadMore: (el: boolean) => void,
  nextAfter: string,
  token: string
) {
  function createObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          switch (countLoad) {
            case 0:
            case 1:
              load();
              setCountLoad(countLoad + 1);
              break;
            case 2:
              setLoadMore(true);
          }
        }
      },
      { rootMargin: "50px" }
    );

    if (observableEl) {
      observer.observe(observableEl);
    }

    return observer;
  }

  useEffect(() => {
    if (!token || token === "undefined") return;

    const observer = createObserver();

    return () => {
      if (observableEl) {
        observer.unobserve(observableEl);
      }
    };
  }, [token, nextAfter]);
}
