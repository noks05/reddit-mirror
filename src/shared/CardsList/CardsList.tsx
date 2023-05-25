import React, { useRef } from "react";
import { Card } from "./Card";
import styles from "./cardslist.less";
import { cardContext } from "../context/cardContext";
import { usePostsData } from "../../hooks/usePostsData";
import { generateRandomString } from "../../utils/react/generateRandomIndex";

interface IPost {
  data: {
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

export function CardsList() {
  const { Provider } = cardContext;
  const bottomOfList = useRef(null);
  const {
    posts,
    isLoading,
    errorLoading,
    loadMore,
    setLoadMore,
    setCountLoad,
    load,
  } = usePostsData(bottomOfList.current);

  return (
    <>
      <ul className={styles.cardsList}>
        {posts &&
          posts.map((p) => (
            <Provider value={p} key={p.data.id + generateRandomString()}>
              <Card post={p.data} />
            </Provider>
          ))}

        {posts?.length === 0 && !isLoading && !errorLoading && (
          <div className={styles.textCenter} role="alert">
            Ни одного поста не найдено
          </div>
        )}

        {!loadMore && (
          <div className={styles.observerElem} ref={bottomOfList}></div>
        )}

        {!loadMore && isLoading && (
          <div className={styles.contr}>
            <div className={styles.loader} role="alert"></div>
          </div>
        )}

        {errorLoading && (
          <div role="alert" className={styles.textAlign}>
            {errorLoading}
          </div>
        )}

        {loadMore && (
          <div className={styles.contr}>
            <button
              className={styles.btnLoadMore}
              type="button"
              role="alert"
              style={{ textAlign: "center" }}
              onClick={() => {
                load();
                setLoadMore(false);
                setCountLoad(1);
              }}
            >
              Загрузить ещё
            </button>
          </div>
        )}
      </ul>
    </>
  );
}
