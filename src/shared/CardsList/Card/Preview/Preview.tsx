import React from 'react';
import styles from './preview.less';

export function Preview() {
  return (
    <div className={styles.preview}>
      <img
        className={styles.previewImg}
        src="https://cdn.dribbble.com/userupload/5779332/file/original-151d9455a8f1217a36cf88054641b99b.png?compress=1&resize=752x"
        alt="preview"
      />
    </div>
  );
}
