import React from "react";
import styles from "./titlecard.less";
import { ModalCard } from "../../../ModalCard";

interface IPropsTitleCard {
  post: IPost;
  onClick: () => void;
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
}

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

export function TitleCard({
  post,
  onClick,
  isModalOpen,
  setIsModalOpen,
}: IPropsTitleCard) {
  return (
    <>
      <h2 className={styles.title} onClick={onClick}>
        <a className={styles.postLink} href="#post-url">
          {post.title}
        </a>
      </h2>

      {isModalOpen && (
        <ModalCard post={post} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
}
