import React, { useEffect, useRef, useState } from "react";
import styles from "./comments.less";
import { EIcons, Icon } from "../../../Icon";
import { Break } from "../../../Break";
import { Text } from "../../../Text";
import { EColors } from "../../../types.global";
import { ListComments } from "./ListComments";

export function Comments() {
  let [isActive, setIsActive] = useState(false);
  const refBtn = useRef<null | HTMLButtonElement>(null);

  function changePaddingBottom(btn: HTMLButtonElement | null, state: boolean) {
    if (!btn) return null;

    const li = btn.closest("[class^=card__card--]");
    if (!li) return null;
    if (state) {
      addPaddingBottom(btn, li);
    } else {
      removePaddingBottom(li);
    }
  }

  function addPaddingBottom(btn: HTMLButtonElement, li: Element) {
    const container = btn.parentNode;
    const heightContr = (
      container?.lastChild as HTMLElement
    ).getBoundingClientRect().height;

    const heightBtn = btn.getBoundingClientRect().height;
    const castomPadding = heightContr - heightBtn;
    if (li) (li as HTMLElement).style.paddingBottom = castomPadding + 50 + "px";
  }

  function removePaddingBottom(li: Element) {
    const paddingTop = (li as HTMLElement).style.paddingTop;
    if (li) (li as HTMLElement).style.paddingBottom = paddingTop;
  }

  useEffect(() => {
    changePaddingBottom(refBtn.current, isActive);
  }, [isActive]);

  return (
    <div className={styles.container}>
      <button
        type="button"
        className={styles.button}
        onClick={() => setIsActive(!isActive)}
        ref={refBtn}
      >
        <Icon
          name={EIcons.comments}
          size={14}
          As="div"
          color={isActive ? EColors.orange : EColors.grey99}
        ></Icon>
        <Break size={4}></Break>
        <Text size={14} color={isActive ? EColors.orange : EColors.grey99}>
          Комментарий
        </Text>
      </button>

      {isActive && (
        <ListComments
          isActive={isActive}
          setIsActive={setIsActive}
        ></ListComments>
      )}
    </div>
  );
}
