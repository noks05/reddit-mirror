import React from "react";
import styles from "./textcontent.less";
import { Comments } from "../Comments";

interface IPropsTextContent {
  name: string;
  avatar: string;
  title: string;
  id: string;
  subreddit: string;
}

export function TextContent({
  id,
  subreddit,
  name,
  avatar,
  title,
}: IPropsTextContent) {
  return (
    <div className={styles.textContent}>
      <Comments postId={id} subreddit={subreddit}></Comments>

      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img
            className={styles.avatar}
            src={
              avatar
                ? avatar
                : "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_4.png"
            }
            alt="avatar"
          />
          <a className={styles.username} href="#user-url">
            {name}
          </a>
        </div>

        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликованно </span>4 часа
          назад
        </span>
      </div>

      <h2 className={styles.title}>
        <a className={styles.postLink} href="#post-url">
          {title}
        </a>
      </h2>
    </div>
  );
}
