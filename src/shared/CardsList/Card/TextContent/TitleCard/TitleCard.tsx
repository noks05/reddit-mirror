import React from "react";
import styles from "./titlecard.less";
import { Link } from "react-router-dom";

interface IPropsTitleCard {
  post: IPost;
  onClick: () => void;
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

export function TitleCard({ post, onClick }: IPropsTitleCard) {
  return (
    <>
      <h2 className={styles.title} onClick={onClick}>
        <Link to={`/posts/${post.id}`} className={styles.postLink}>
          {post.title}
        </Link>
      </h2>
    </>
  );
}
