import React, { RefObject } from "react";
import styles from "./genericcomments.less";
import { Icon } from "../../../shared/glop/Icon";
import { Comment } from "../../../shared/CardsList/Card/Comments/BoxComments/ListComments/Comment";
import { EColors } from "../../../shared/types.global";
interface IPropsGenericComments {
  data: any;
  classContainer?: string;
}
export function GenericComments({
  data,
  classContainer,
}: IPropsGenericComments) {
  return (
    <ul className={classContainer}>
      {data.map((comment: any) => (
        <li className={styles.comment} key={comment.data.id}>
          <div className={styles.commentInner}>
            <div className={styles.hideControls}>
              <Icon
                name="up"
                userClass={styles.iconUp}
                color={EColors.greyD9}
              />
              <Icon
                name="down"
                userClass={styles.iconDown}
                color={EColors.greyD9}
              />
            </div>

            <Comment
              comment={comment}
              controls={["Ответить", "Поделиться", "Пожаловаться"]}
            />
          </div>

          {comment.data.replies && (
            <GenericComments data={comment.data.replies.data.children} />
          )}
        </li>
      ))}
    </ul>
  );
}
