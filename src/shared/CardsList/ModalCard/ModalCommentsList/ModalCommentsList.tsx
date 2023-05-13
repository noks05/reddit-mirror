import React from "react";
import styles from "./modalcommentslist.less";
import { useCommentsData } from "../../../../hooks/useCommentsData";
import { Comment } from "../../Card/Comments/BoxComments/ListComments/Comment";
import { Text } from "../../../Text";
import { EColors } from "../../../types.global";
import { CarmaCounter } from "../../Card/Controls/CarmaCounter";

interface IPropsModalCommentsList {
  id: string;
  subreddit: string;
}

export function ModalCommentsList({ id, subreddit }: IPropsModalCommentsList) {
  const [data] = useCommentsData(id, subreddit);
  console.log(data);
  if (!data.length) {
    return (
      <Text size={14} color={EColors.grey99}>
        Будьте первым кто оставит комментарий
      </Text>
    );
  }
  return (
    <ul>
      {data.map((comment) => (
        <li className={styles.comment} key={comment.data.id}>
          <CarmaCounter classUser={styles.carmaCounter} />
          <Comment comment={comment} />
        </li>
      ))}
    </ul>
  );
}
