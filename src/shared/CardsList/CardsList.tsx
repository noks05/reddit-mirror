import React, { useContext, useState } from "react";
import { Card } from "./Card";
import styles from "./cardslist.less";
import { postsContext } from "../context/postsContext";
import { ModalCard } from "./ModalCard";

export function CardsList() {
  const data = useContext(postsContext);
  const posts = data.posts;

  const [isModal, setIsModal] = useState(false);
  const [clickedPost, setClickedPost] = useState({});

  function onClick(curTarget: HTMLElement) {
    setIsModal(true);
    const findPost = posts?.find((post) => {
      return post.data.id === curTarget.id;
    });
    setClickedPost(findPost ? findPost : {});
  }

  return (
    <>
      <ul className={styles.cardsList}>
        {posts &&
          posts.map((p) => (
            <Card
              key={p.data.id}
              id={p.data.id}
              subreddit={p.data.subreddit}
              img={p.data.url}
              name={p.data.author}
              avatar={p.data.sr_detail.icon_img}
              title={p.data.title}
              score={p.data.score}
              clickHandler={onClick}
            />
          ))}
      </ul>
      {isModal && <ModalCard post={clickedPost} setIsModal={setIsModal} />}
    </>
  );
}
