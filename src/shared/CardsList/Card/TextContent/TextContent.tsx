import React from "react";
import styles from "./textcontent.less";

export function TextContent() {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img
            className={styles.avatar}
            src="https://cdn.dribbble.com/users/803221/avatars/small/c20484ece0f88ce6c8ddad5b4e662d8c.png?1566885869"
            alt="avatar"
          />
          <a className={styles.username} href="#user-url">
            Дмитрий Гришин
          </a>
        </div>

        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликованно </span>4 часа
          назад
        </span>
      </div>

      <h2 className={styles.title}>
        <a className={styles.postLink} href="#post-url">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </a>
      </h2>
    </div>
  );
}
