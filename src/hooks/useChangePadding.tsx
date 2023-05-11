import { useEffect } from "react";

export function useChangePadding(
  data?: any,
  container?: HTMLElement | null,
  isActive?: boolean,
  isClick?: boolean
) {
  useEffect(() => {
    if (!container) return;
    const li = container.closest("[class^=card__card--]");

    if (isActive) {
      const curHeightContr = (
        container?.lastChild as HTMLElement
      ).getBoundingClientRect().height;
      if (li) {
        (li as HTMLElement).style.paddingBottom = curHeightContr + 10 + "px";
      }
    } else {
      const paddingTop = (li as HTMLElement).style.paddingTop;
      if (li) (li as HTMLElement).style.paddingBottom = paddingTop;
    }
  }, [data, isClick]);
}
