import React, { useContext } from "react";
import { Card } from "./Card";
import styles from "./cardslist.less";
import { usePostsData } from "../../hooks/usePostsData";
import { postsContext } from "../context/postsContext";

export function CardsList() {
  const data = useContext(postsContext);
  const posts = data.posts;

  return (
    <ul className={styles.cardsList}>
      {posts &&
        posts.map((p) => (
          <Card
            key={p.data.id}
            img={p.data.url}
            name={p.data.author}
            avatar={p.data.sr_detail.icon_img}
            title={p.data.title}
          />
        ))}
    </ul>
  );
}
