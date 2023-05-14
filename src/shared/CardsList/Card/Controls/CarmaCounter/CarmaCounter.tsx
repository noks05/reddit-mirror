import React from "react";
import styles from "./carmacounter.less";
import { Text } from "../../../../glop/Text";
import { Icon } from "../../../../glop/Icon";
import { EColors } from "../../../../types.global";

export function CarmaCounter({
  score,
  classUser = "",
}: {
  score?: string;
  classUser?: string;
}) {
  return (
    <div className={[styles.karmaCounter, classUser].join(" ")}>
      <button className={styles.up}>
        <Icon name="up" userClass={styles.iconUp} color={EColors.greyD9} />
      </button>

      <Text size={12} userClass={styles.karmaValue}>
        {score}
      </Text>

      <button className={styles.down}>
        <Icon name="down" userClass={styles.iconDown} color={EColors.greyD9} />
      </button>
    </div>
  );
}
