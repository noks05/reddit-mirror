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
  score: string;
  clickHandler: (curTarget: HTMLElement) => void;
}

export function Card(props: IPropsCard) {
  const { id, subreddit, name, avatar, img, title, score, clickHandler } =
    props;

  return (
    <li
      className={styles.card}
      id={id}
      onClick={(e) => clickHandler(e.currentTarget)}
    >
      <TextContent
        name={name}
        avatar={avatar}
        title={title}
        id={id}
        subreddit={subreddit}
        commented={true}
      />
      {(img.includes(".jpg") || img.includes(".png")) && <Preview img={img} />}
      <Menu />
      <Controls score={score} />
    </li>
  );
}
