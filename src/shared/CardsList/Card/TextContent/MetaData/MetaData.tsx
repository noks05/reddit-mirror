import React from "react";
import styles from "./metadata.less";
import { Break } from "../../../../Break";
import { Text } from "../../../../glop/Text";
import { Icon } from "../../../../glop/Icon";
interface IPropsMeataData {
  subreddit?: string;
  avatar?: string;
  name: string;
}

export function MetaData({ subreddit, avatar = "", name }: IPropsMeataData) {
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
        {avatar.length ? (
          <img src={avatar} alt="avatar" className={styles.avatar} />
        ) : (
          <Icon name="anon" size={20} userClass={styles.avatar} />
        )}
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
