import React from "react";
import styles from "./card.less";
import { Controls } from "./Controls";
import { Menu } from "./Menu";
import { Preview } from "./Preview";
import { TextContent } from "./TextContent";

interface IPropsCard {
  id: string;
  subreddit: string;
  name: string;
  avatar: string;
  img: string;
  title: string;
}

export function Card(props: IPropsCard) {
  const { id, subreddit, name, avatar, img, title } = props;

  return (
    <li className={styles.card}>
      <TextContent
        name={name}
        avatar={avatar}
        title={title}
        id={id}
        subreddit={subreddit}
      />
      {(img.includes(".jpg") || img.includes(".png")) && <Preview img={img} />}
      <Menu />
      <Controls />
    </li>
  );
}
