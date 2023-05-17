import React, { useState } from "react";
import styles from "./comment.less";
import { Text } from "../../../../../../glop/Text";
import { EColors } from "../../../../../../types.global";
import { MetaData } from "../../../../TextContent/MetaData";
import { generateId } from "../../../../../../../utils/react/generateRandomIndex";
import { GenericControls } from "../../../../../../../utils/react/GenericControls";
import { FormComments } from "../FormComments";

export function Comment({
  comment,
  controls,
}: {
  comment: any;
  controls?: string[];
}) {
  const [isForm, setIsForm] = useState(false);
  const data = [
    {
      img: "comments",
      text: "Ответить",
      desktop: true,
      onClick: (e: MouseEvent) => {
        e.stopPropagation();
        setIsForm(!isForm);
      },
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
    {
      img: "close",
      text: "Скрыть",
      desktop: false,
    },
    {
      img: "save",
      text: "Сохранить",
      desktop: true,
    },
  ].map((obj) => generateId(obj));

  let filteredData: any[] = [];
  if (controls) {
    filteredData = controls
      .map((str) => {
        return data.find((obj) => obj.text === str);
      })
      .filter((el) => el !== undefined);
  }

  return (
    <>
      <MetaData name={comment.data.author} subreddit={comment.data.subreddit} />

      <Text
        size={14}
        color={EColors.black}
        As="p"
        userClass={[styles.lineHeight24, styles.textBody].join(" ")}
      >
        {comment.data.body}
      </Text>

      {filteredData.length !== 0 && (
        <ul className={styles.list}>
          <GenericControls
            As="li"
            data={filteredData}
            userClass={styles.item}
          />
        </ul>
      )}

      {isForm && <FormComments nameAutor={comment.data.author} />}
    </>
  );
}
