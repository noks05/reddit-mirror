import React from "react";
import { Actions } from "./Actions";
import { CarmaCounter } from "./CarmaCounter";
import { CommentsButton } from "./CommentsButton";
import styles from "./controls.less";

export function Controls({ score }: { score: string }) {
  return (
    <div className={styles.controls}>
      <CarmaCounter score={score} />
      <CommentsButton />
      <Actions />
    </div>
  );
}
