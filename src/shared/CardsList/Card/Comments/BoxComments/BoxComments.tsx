import React from "react";
import styles from "./boxcomments.less";
import { EIcons, Icon } from "../../../../Icon";
import { EColors } from "../../../../types.global";
import { ListComments } from "./ListComments";

interface IPropsListComments {
  isActive: boolean;
  isMore: boolean;
  setIsActive: (isActive: boolean) => void;
  setIsMore: (isMore: boolean) => void;
}

export function BoxComments(props: IPropsListComments) {
  const { isActive, setIsActive } = props;

  return (
    <div className={styles.listBox}>
      <Icon
        name="rainbow"
        color={EColors.orange}
        userClass={styles.rainbow}
      ></Icon>

      <button
        className={styles.close}
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        <Icon name={EIcons.closeX} size={14} color={EColors.greyC4}></Icon>
      </button>

      <ListComments></ListComments>
    </div>
  );
}
