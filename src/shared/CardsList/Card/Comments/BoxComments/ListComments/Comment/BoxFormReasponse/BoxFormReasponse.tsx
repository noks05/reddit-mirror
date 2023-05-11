import React, { useContext, useState } from "react";
import styles from "./boxformreasponse.less";
import { EIcons, Icon } from "../../../../../../../Icon";
import { Break } from "../../../../../../../Break";
import { Text } from "../../../../../../../Text";
import { EColors } from "../../../../../../../types.global";
import { ResponseFormComments } from "../../ResponseFormComments";
import { commentsContext } from "../../../../../../../context/commentsContext";
import { useChangePadding } from "../../../../../../../../hooks/useChangePadding";

export function BoxFormReasponse({ author }: { author: string }) {
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
          console.log(" ew");
        }}
      >
        <Icon name={EIcons.comments} color={EColors.grey99} size={14}></Icon>
        <Break size={8}></Break>
        <Text size={14} color={EColors.grey99} userClass={styles.textBtn}>
          Ответить
        </Text>
      </button>

      {isForm && (
        <ResponseFormComments nameAutor={author}></ResponseFormComments>
      )}
    </div>
  );
}
