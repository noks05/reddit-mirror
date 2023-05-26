import React from "react";
import styles from "./toolsbar.less";
import { Icon } from "../../../glop/Icon";
import { EColors } from "../../../types.global";
import { Text } from "../../../glop/Text";

export function ToolsBar({ icons }: { icons: string[] }) {
  return (
    <div className={styles.toolsBox}>
      <ul className={styles.tools}>
        {icons.map((icon: string) => (
          <li className={styles.itemTools} key={icon}>
            <button type="button" className={styles.tool}>
              <Icon name={icon} color={EColors.grey99} />
            </button>
          </li>
        ))}
      </ul>
      <button className={styles.button} type="submit">
        <Text size={14} color={EColors.white}>
          Комментировать
        </Text>
      </button>
    </div>
  );
}
