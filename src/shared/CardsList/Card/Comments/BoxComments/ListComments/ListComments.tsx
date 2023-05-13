import React, { useContext, useState } from "react";
import styles from "./listcomments.less";
import { Text } from "../../../../../Text";
import { EColors } from "../../../../../types.global";
import { commentsContext } from "../../../../../context/commentsContext";
import { Comment } from "./Comment";

export function ListComments() {
  const { data, setIsMore, isMore } = useContext(commentsContext);
  const [curData, setCurData] = useState([data[0]]);

  const dataLength = data.length - 1;

  return (
    <>
      <ul>
        {curData.map((comment) => (
          <li className={styles.commentBox} key={comment.data.id}>
            <Comment comment={comment} />
          </li>
        ))}
      </ul>

      {!(dataLength <= 0 || isMore) ? (
        <button
          onClick={() => {
            if (!setIsMore) return null;
            setIsMore(!isMore);
            setCurData(data);
          }}
          type="button"
        >
          <Text
            size={14}
            color={EColors.orange}
            userClass={styles.lineHeight24}
          >
            + ещё {dataLength + ""}&nbsp;ваших комментария
          </Text>
        </button>
      ) : null}
    </>
  );
}
