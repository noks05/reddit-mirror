import React from "react";
import styles from "./titlecard.less";

export function TitleCard({ title }: { title: string }) {
  return (
    <h2 className={styles.title}>
      <a className={styles.postLink} href="#post-url">
        {title}
      </a>
    </h2>
  );
}
