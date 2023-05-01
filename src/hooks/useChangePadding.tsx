import { useEffect } from "react";

export function useChangePadding(
  elem: HTMLElement | null,
  isActive: boolean,
  isMore: boolean
) {
  useEffect(() => {
    if (!elem) return;
    const li = elem.closest("[class^=card__card--]");

    if (isActive) {
      const container = elem.closest("[class^=comments__container--]");
      const heightContr = (
        container?.lastChild as HTMLElement
      ).getBoundingClientRect().height;

      const heightElem = elem.getBoundingClientRect().height;
      const castomPadding = heightContr - heightElem;
      if (li)
        (li as HTMLElement).style.paddingBottom = castomPadding + 50 + "px";
    } else {
      const paddingTop = (li as HTMLElement).style.paddingTop;
      if (li) (li as HTMLElement).style.paddingBottom = paddingTop;
    }
  }, [isActive, isMore]);
}
