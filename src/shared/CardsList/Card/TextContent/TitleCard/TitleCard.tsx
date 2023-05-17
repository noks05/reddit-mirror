import React, { useState } from "react";
import styles from "./titlecard.less";
import { ModalCard } from "../../../ModalCard";

interface IPropsTitleCard {
  post: {
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
export function TitleCard({ post }: IPropsTitleCard) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <h2 className={styles.title} onClick={() => setIsModalOpen(true)}>
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
