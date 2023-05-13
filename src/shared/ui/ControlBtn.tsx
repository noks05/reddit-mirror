import React from "react";
import styles from "./controlbtn.less";
import { Icon } from "../Icon";
import { EColors } from "../types.global";
import { Break } from "../Break";
import { Text } from "../Text";

export function ControlBtn({ img, text }: { img?: string; text: string }) {
  return (
    <button type="button" className={styles.button}>
      {img !== undefined && (
        <Icon name={img} size={14} color={EColors.grey99} />
      )}

      <Break size={8} />
      <Text children={text} size={14} color={EColors.grey99} />
    </button>
  );
}
