import React, { useRef } from "react";
import styles from "./card.less";
import { Controls } from "./Controls";
import { Menu } from "./Menu";
import { Preview } from "./Preview";
import { TextContent } from "./TextContent";

interface IPropsCard {
  id: string;
  name: string;
  avatar: string;
  img: string;
  title: string;
}

export function Card(props: IPropsCard) {
  const { id, name, avatar, img, title } = props;

  return (
    <li className={styles.card} id={id}>
      <TextContent name={name} avatar={avatar} title={title} />
      {(img.includes(".jpg") || img.includes(".png")) && <Preview img={img} />}
      <Menu />
      <Controls />
    </li>
  );
}
