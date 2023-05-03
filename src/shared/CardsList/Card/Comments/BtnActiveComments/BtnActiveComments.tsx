import React from "react";
import styles from "./btnactivecomments.less";
import { EIcons, Icon } from "../../../../Icon";
import { EColors } from "../../../../types.global";
import { Break } from "../../../../Break";
import { Text } from "../../../../Text";
interface IPropsBtnActiveComments {
  data: any;
  isActive: boolean;
  setIsMore: (isMore: boolean) => void;
  setIsActive: (isActive: boolean) => void;
}

export function BtnActiveComments(props: IPropsBtnActiveComments) {
  const { data, isActive, setIsActive, setIsMore } = props;

  function openComments(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setIsActive(!isActive);
    setIsMore(false);
  }

  return (
    <button
      type="button"
      className={
        data.length
          ? styles.button
          : [styles.button, styles.buttonOff].join(" ")
      }
      onClick={(e) => openComments(e)}
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
  );
}
