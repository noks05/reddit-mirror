import React from "react";
import styles from "./boxcomments.less";
import { EIcons, Icon } from "../../../../Icon";
import { EColors } from "../../../../types.global";
import { ListComments } from "./ListComments";

interface IPropsListComments {
  data: IComment[];
  isActive: boolean;
  isMore: boolean;
  setIsActive: (isActive: boolean) => void;
  setIsMore: (isMore: boolean) => void;
}

interface IComment {
  data: { id: string; author: string; selftext: string; link_url: string };
}
export function BoxComments(props: IPropsListComments) {
  const { data, isMore, setIsMore, isActive, setIsActive } = props;

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
          setIsMore(false);
        }}
      >
        <Icon name={EIcons.closeX} size={14} color={EColors.greyC4}></Icon>
      </button>

      <ListComments
        data={data}
        isMore={isMore}
        setIsMore={setIsMore}
      ></ListComments>
    </div>
  );
}
