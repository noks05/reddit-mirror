import React from "react";
import styles from "./controlbtn.less";
import { Icon } from "../../glop/Icon";
import { EColors } from "../../types.global";
import { Break } from "../../Break";
import { Text } from "../../glop/Text";

export function ControlBtn({
  img,
  text,
  onClick,
}: {
  img?: string;
  text: string;
  onClick?: () => void;
}) {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      {img !== undefined && (
        <Icon name={img} size={14} color={EColors.grey99} />
      )}

      <Break size={8} />
      <Text children={text} size={14} color={EColors.grey99} />
    </button>
  );
}
