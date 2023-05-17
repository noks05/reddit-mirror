import React, { useEffect, useRef } from "react";
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

interface IPost {
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
}

interface IPropsModalCard {
  post: IPost;
  onClose: () => void;
}

export function ModalCard({ post, onClose }: IPropsModalCard) {
  if (typeof window === "undefined") return null;
  const portalRoot = document.getElementById("portal-root");
  if (!portalRoot) return null;

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: Event) {
      if (e.target instanceof Node) {
        const clickOut = !modalRef.current?.contains(e.target);
        const clickCloseBtn = modalRef.current
          ?.querySelector("[class^='modalcard__closeBtn--']")
          ?.contains(e.target);

        if (clickOut || clickCloseBtn) {
          onClose();
        }
      }
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  return ReactDOM.createPortal(
    <div className={styles.wrapper}>
      <div className={styles.box} ref={modalRef}>
        <button className={styles.closeBtn}>
          <Icon
            name={EIcons.closeX}
            size={14}
            color={EColors.greyC4}
            userClass="closeBtn"
          />
        </button>

        <div className={styles.title}>
          <CarmaCounter score={post.score} classUser={styles.karmaCounter} />
          <Break size={22} />
          <div className={styles.textTitle}>
            <Text As="h1" size={20} userClass={styles.titleTitle}>
              {post.title}
            </Text>
            <MetaData
              name={post.author}
              avatar={post.sr_detail.icon_img}
              subreddit={post.subreddit}
            />
          </div>
        </div>

        <Text size={14}>{post.sr_detail.description}</Text>

        <Separate userClass={styles.separate} color={EColors.greyD9} />

        <FormComments nameAutor={post.author} />

        <Separate userClass={styles.separate} color={EColors.greyD9} />

        <ModalCommentsList id={post.id} subreddit={post.subreddit} />
      </div>
    </div>,
    portalRoot
  );
}
