import React, { useRef, useState } from "react";
import styles from "./listcomments.less";
import { EIcons, Icon } from "../../../../../Icon";
import { Break } from "../../../../../Break";
import { Text } from "../../../../../Text";
import { EColors } from "../../../../../types.global";
import { ResponseFormComments } from "./ResponseFormComments";

interface IComment {
  data: { id: string; author: string; selftext: string; link_url: string };
}

interface IPropsListComments {
  data: IComment[];
  setIsMore: (isMore: boolean) => void;
  isMore: boolean;
}

export function ListComments({ data, setIsMore, isMore }: IPropsListComments) {
  const [curData, setCurData] = useState([data[0]]);
  const [isForm, setIsForm] = useState(false);

  const dataLength = data.length - 1;

  return (
    <>
      <ul>
        {curData.map((comment) => (
          <li className={styles.commentBox} key={comment.data.id}>
            <div className={styles.user}>
              <Icon name={EIcons.anon} size={20}></Icon>
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
              {comment.data.selftext}
            </Text>

            <button
              type="button"
              className={styles.button}
              onClick={() => {
                setIsForm(!isForm);
              }}
            >
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

            {isForm && (
              <ResponseFormComments
                nameAutor={comment.data.author}
              ></ResponseFormComments>
            )}
          </li>
        ))}
      </ul>

      {!(dataLength <= 0 || isMore) ? (
        <button
          onClick={() => {
            setIsMore(!isMore);
            setCurData(data);
          }}
          type="button"
        >
          <Text
            size={14}
            color={EColors.orange}
            userClass={styles.lineHeight24}
          >
            + ещё {dataLength + ""}&nbsp;ваших комментария
          </Text>
        </button>
      ) : null}
    </>
  );
}
