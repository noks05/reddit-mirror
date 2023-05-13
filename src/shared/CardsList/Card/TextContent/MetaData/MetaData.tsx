import React from "react";
import styles from "./metadata.less";
import { Break } from "../../../../Break";
import { Text } from "../../../../Text";
interface IPropsMeataData {
  subreddit?: string;
  avatar: string;
  name: string;
}

export function MetaData({ subreddit, avatar, name }: IPropsMeataData) {
  return (
    <div className={styles.metaData}>
      {subreddit && (
        <>
          <Text size={14} userClass={styles.subreddit}>
            {subreddit}
          </Text>
          <Break size={16} />
        </>
      )}
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
  );
}
