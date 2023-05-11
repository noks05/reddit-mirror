import React from "react";
import styles from "./comment.less";
import { EIcons, Icon } from "../../../../../../Icon";
import { Text } from "../../../../../../Text";
import { Break } from "../../../../../../Break";
import { EColors } from "../../../../../../types.global";
import { BoxFormReasponse } from "./BoxFormReasponse";

export function Comment({ comment }: { comment: any }) {
  return (
    <>
      <div className={styles.user}>
        <Icon name={EIcons.anon} size={20}></Icon>
        <Break size={8}></Break>
        <Text size={14} color={EColors.orange}>
          {comment.data.author}
        </Text>
      </div>

      <Text
        size={14}
        color={EColors.black}
        As="p"
        userClass={[styles.lineHeight24, styles.textBody].join(" ")}
      >
        {comment.data.selftext}
      </Text>

      <BoxFormReasponse author={comment.data.author} />
    </>
  );
}
