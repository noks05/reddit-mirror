import React, { useState } from "react";
import styles from "./listcomments.less";
import { EIcons, Icon } from "../../../../Icon";
import { Text } from "../../../../Text";
import { EColors } from "../../../../types.global";
import { Break } from "../../../../Break";

interface IPropsListComments {
  data: any;
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
  isMore: boolean;
  setIsMore: (isActive: boolean) => void;
}

interface IComment {
  data: { id: string; author: string; body: string; link_url: string };
}

export function ListComments({
  data,
  isMore,
  setIsMore,
  isActive,
  setIsActive,
}: IPropsListComments) {
  const [currentData, setCurrentData] = useState<IComment[]>([data[0]]);
  console.log(data);

  if (!data.length) return null;

  return (
    <div className={styles.listBox}>
      <Icon
        name="rainbow"
        color={EColors.orange}
        userClass={styles.rainbow}
      ></Icon>

      <ul>
        {currentData.map((comment) => (
          <li className={styles.commentBox} key={comment.data.id}>
            <div className={styles.user}>
              <Icon name={EIcons.anon} size={20}>
                {/* <img src="http://i.imgur.com/tDRDAYK.png" alt="avatar" /> */}
              </Icon>
              <Break size={8}></Break>
              <Text size={14} color={EColors.orange}>
                {comment.data.author}
              </Text>
            </div>

            <Text
              size={14}
              color={EColors.black}
              As="p"
              userClass={[styles.lineHeight24, styles.textBody].join(" ")}
            >
              {comment.data.body}
            </Text>

            <button type="button" className={styles.button}>
              <Icon
                name={EIcons.comments}
                color={EColors.grey99}
                size={14}
              ></Icon>
              <Break size={8}></Break>
              <Text size={14} color={EColors.grey99} userClass={styles.textBtn}>
                Ответить
              </Text>
            </button>
          </li>
        ))}
      </ul>

      {!isMore && (
        <button
          onClick={() => {
            setCurrentData(data);
            setIsMore(!isMore);
          }}
          type="button"
        >
          <Text
            size={14}
            color={EColors.orange}
            userClass={styles.lineHeight24}
          >
            + ещё {data.length - 1 + ""}&nbsp;ваших комментария
          </Text>
        </button>
      )}

      <button
        className={styles.close}
        onClick={() => {
          setIsActive(!isActive);
          setIsMore(false);
        }}
      >
        <Icon name={EIcons.closeX} size={14} color={EColors.greyC4}></Icon>
      </button>
    </div>
  );
}
