import React, { useContext, useState } from "react";
import styles from "./boxformcomments.less";
import { EIcons, Icon } from "../../../../../../../glop/Icon";
import { Break } from "../../../../../../../Break";
import { Text } from "../../../../../../../glop/Text";
import { EColors } from "../../../../../../../types.global";
import { FormComments } from "../../FormComments";
import { commentsContext } from "../../../../../../../context/commentsContext";
import { useChangePadding } from "../../../../../../../../hooks/useChangePadding";

export function BoxFormComments({ author }: { author: string }) {
  const [isForm, setIsForm] = useState(false);
  const { data, refBtnCurrent, isActive } = useContext(commentsContext);
  useChangePadding(data, refBtnCurrent, isActive, isForm);

  return (
    <div className={styles.container}>
      <button
        type="button"
        className={styles.button}
        onClick={() => {
          setIsForm(!isForm);
        }}
      >
        <Icon name={EIcons.comments} color={EColors.grey99} size={14}></Icon>
        <Break size={8}></Break>
        <Text size={14} color={EColors.grey99} userClass={styles.textBtn}>
          Ответить
        </Text>
      </button>

      {/* {isForm && <FormComments nameAutor={author}></FormComments>} */}
    </div>
  );
}
