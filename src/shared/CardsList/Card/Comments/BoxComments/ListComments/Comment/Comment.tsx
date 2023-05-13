import React from "react";
import styles from "./comment.less";
import { Text } from "../../../../../../Text";
import { EColors } from "../../../../../../types.global";
import { MetaData } from "../../../../TextContent/MetaData";
import { GenericList } from "../../../../../../../utils/react/GenericList";
import { generateId } from "../../../../../../../utils/react/generateRandomIndex";

export function Comment({ comment }: { comment: any }) {
  const data = [
    {
      img: "comments",
      text: "Ответить",
      desktop: true,
    },
    {
      img: "share",
      text: "Поделиться",
      desktop: true,
    },
    {
      img: "warning",
      text: "Пожаловаться",
      desktop: true,
    },
  ].map((obj) => generateId(obj));

  return (
    <>
      <MetaData
        name={comment.author}
        avatar={""}
        subreddit={comment.subreddit}
      />

      <Text
        size={14}
        color={EColors.black}
        As="p"
        userClass={[styles.lineHeight24, styles.textBody].join(" ")}
      >
        {comment.data.body}
      </Text>

      <ul className={styles.list}>
        <GenericList As="li" data={data} userClass={styles.item} />
      </ul>
    </>
  );
}
