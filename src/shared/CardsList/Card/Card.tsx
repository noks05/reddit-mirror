import React from "react";
import styles from "./card.less";
import { Controls } from "./Controls";
import { Menu } from "./Menu";
import { Preview } from "./Preview";
import { TextContent } from "./TextContent";

interface IPropsCard {
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

export function Card({ post }: IPropsCard) {
  return (
    <li className={styles.card} id={post.id}>
      <TextContent post={post} />
      {(post.url.includes(".jpg") || post.url.includes(".png")) && (
        <Preview img={post.url} />
      )}
      <Menu />
      <Controls score={post.score} />
    </li>
  );
}
