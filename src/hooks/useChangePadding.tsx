import { useEffect } from "react";

export function useChangePadding(
  container: HTMLElement | null,
  isActive: boolean,
  isMore: boolean,
  data: any
) {
  useEffect(() => {
    if (!container) return;
    if (!data.length) return;
    const li = container.closest("[class^=card__card--]");

    if (isActive) {
      const heightContr = (
        container?.lastChild as HTMLElement
      ).getBoundingClientRect().height;

      if (li) (li as HTMLElement).style.paddingBottom = heightContr + 10 + "px";
    } else {
      const paddingTop = (li as HTMLElement).style.paddingTop;
      if (li) (li as HTMLElement).style.paddingBottom = paddingTop;
    }
  }, [isActive, isMore, data]);
}
