import React from "react";
import styles from "./modalcard.less";
import ReactDOM from "react-dom";
import { EIcons, Icon } from "../../glop/Icon";
import { EColors } from "../../types.global";
import { CarmaCounter } from "../Card/Controls/CarmaCounter";
import { Break } from "../../Break";
import { MetaData } from "../Card/TextContent/MetaData";
import { Text } from "../../glop/Text";
import { FormComments } from "../Card/Comments/BoxComments/ListComments/FormComments";
import { ModalCommentsList } from "./ModalCommentsList";
import { Separate } from "../../glop/Separate/Separate";

interface IClickPost {
  data?: {
    id: string;
    subreddit: string;
    author: string;
    sr_detail: {
      icon_img: string;
      description: string;
    };
    url: string;
    title: string;
    score: string;
  };
}

interface IPropsModalCard {
  post: IClickPost;
  setIsModal: (isModal: boolean) => void;
}

export function ModalCard({ post, setIsModal }: IPropsModalCard) {
  if (typeof window === "undefined") return null;

  const portalRoot = document.getElementById("portal-root");
  if (!portalRoot) return null;
  if (!post.data) return null;

  return ReactDOM.createPortal(
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <button className={styles.closeBtn} onClick={() => setIsModal(false)}>
          <Icon
            name={EIcons.closeX}
            size={14}
            color={EColors.greyC4}
            userClass="closeBtn"
          />
        </button>

        <div className={styles.title}>
          <CarmaCounter
            score={post.data.score}
            classUser={styles.karmaCounter}
          />
          <Break size={22} />
          <div className={styles.textTitle}>
            <Text As="h1" size={20} userClass={styles.titleTitle}>
              {post.data.title}
            </Text>
            <MetaData
              name={post.data.author}
              avatar={post.data.sr_detail.icon_img}
              subreddit={post.data.subreddit}
            />
          </div>
        </div>

        <Text size={14}>{post.data.sr_detail.description}</Text>

        <Separate userClass={styles.separate} color={EColors.greyD9} />

        <FormComments nameAutor={post.data.author} />

        <Separate userClass={styles.separate} color={EColors.greyD9} />

        <ModalCommentsList id={post.data.id} subreddit={post.data.subreddit} />
      </div>
    </div>,
    portalRoot
  );
}
