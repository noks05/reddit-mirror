import React from "react";
import styles from "./genericcomments.less";
import { Icon } from "../../../shared/glop/Icon";
import { EColors } from "../../../shared/types.global";
import { composeWithDevTools } from "@redux-devtools/extension";
import { legacy_createStore } from "redux";
import { rootReducer } from "../../../store";
import { Provider } from "react-redux";
import { CommentContainer } from "../../../shared/CardsList/CommentContainer";

interface IPropsGenericComments {
  data: any;
  classContainer?: string;
}

const store = legacy_createStore(rootReducer, composeWithDevTools());

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

            <Provider store={store}>
              <CommentContainer
                comment={comment}
                controls={["Ответить", "Поделиться", "Пожаловаться"]}
              />
            </Provider>
          </div>

          {comment.data.replies && (
            <GenericComments data={comment.data.replies.data.children} />
          )}
        </li>
      ))}
    </ul>
  );
}
