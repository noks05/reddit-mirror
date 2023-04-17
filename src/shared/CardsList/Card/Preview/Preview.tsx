import React from "react";
import styles from "./preview.less";

interface IPropsPreview {
  img: string;
}

export function Preview({ img }: IPropsPreview) {
  return (
    <div className={styles.preview}>
      <img className={styles.previewImg} src={img} alt="preview" />
    </div>
  );
}
