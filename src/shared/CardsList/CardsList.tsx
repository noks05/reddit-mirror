import React, { useContext } from "react";
import { Card } from "./Card";
import styles from "./cardslist.less";
import { postsContext } from "../context/postsContext";
import { cardContext } from "../context/cardContext";

export function CardsList() {
  const data = useContext(postsContext);
  const { Provider } = cardContext;
  const posts = data.posts;

  return (
    <>
      <ul className={styles.cardsList}>
        {posts &&
          posts.map((p) => (
            <Provider value={p} key={p.data.id}>
              <Card post={p.data} />
            </Provider>
          ))}
      </ul>
    </>
  );
}
