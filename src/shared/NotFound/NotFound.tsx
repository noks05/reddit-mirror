import React from "react";
import styles from "./notfound.less";
import { Text } from "../glop/Text";
import { EColors } from "../types.global";

export function NotFound() {
  return (
    <div className={styles.container}>
      <Text size={50} color={EColors.orange}>
        Ошибка 404
      </Text>
      <Text size={28}>страница не найдена</Text>
      <a className={styles.linkMeanPage} href="http://localhost:3000/posts">
        На главную
      </a>
    </div>
  );
}
