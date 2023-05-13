import React from "react";
import styles from "./carmacounter.less";
import { Text } from "../../../../Text";

export function CarmaCounter({
  score,
  classUser,
}: {
  score?: string;
  classUser?: string;
}) {
  return (
    <div className={[styles.karmaCounter, classUser].join(" ")}>
      <button className={styles.up}>
        <svg
          width="19"
          height="10"
          viewBox="0 0 19 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.5 0L0 10H19L9.5 0Z" fill="#D9D9D9" />
        </svg>
      </button>

      {score ? (
        <Text size={12} userClass={styles.karmaValue}>
          {score}
        </Text>
      ) : (
        <span style={{ paddingTop: "10px" }} />
      )}
      <button className={styles.down}>
        <svg
          width="19"
          height="10"
          viewBox="0 0 19 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z"
            fill="#D9D9D9"
          />
        </svg>
      </button>
    </div>
  );
}
