import React from "react";
import styles from "./comment.less";
import { FormComments } from "../FormComments";
import { GenericControls } from "../../../utils/react/GenericControls";
import { EColors } from "../../types.global";
import { MetaData } from "../Card/TextContent/MetaData";
import { Text } from "../../glop/Text";

interface IPropsComment {
  author: string;
  subreddit: string;
  body: string;
  data: any;
  isForm: boolean;
}

export function Comment({
  author,
  subreddit,
  body,
  data,
  isForm,
}: IPropsComment) {
  return (
    <>
      <MetaData name={author} subreddit={subreddit} />

      <Text
        size={14}
        color={EColors.black}
        As="p"
        userClass={[styles.lineHeight24, styles.textBody].join(" ")}
      >
        {body}
      </Text>

      {data.length !== 0 && (
        <ul className={styles.list}>
          <GenericControls As="li" data={data} userClass={styles.item} />
        </ul>
      )}

      {isForm && <FormComments />}
    </>
  );
}
