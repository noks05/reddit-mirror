import React, { useEffect, useRef, useState } from "react";
import { Card } from "./Card";
import styles from "./cardslist.less";
import { cardContext } from "../context/cardContext";
import { usePostsData } from "../../hooks/usePostsData";

export function CardsList() {
  const { Provider } = cardContext;
  const bottomOfList = useRef(null);
  const [loadMore, setLoadMore] = useState(false);
  const { posts, isLoading, errorLoading } = usePostsData(
    bottomOfList.current,
    loadMore
  );

  useEffect(() => {
    const check1 = posts.length !== 0;
    const check2 = (posts.length / 7) % 3 === 2;

    if (check1 && check2) {
      setLoadMore(true);
    }
    console.log(posts.length);
  }, [posts]);

  return (
    <>
      <ul className={styles.cardsList}>
        {posts?.length === 0 && !isLoading && !errorLoading && (
          <div role="alert" style={{ textAlign: "center" }}>
            Ни одного поста не найдено
          </div>
        )}

        {posts &&
          posts.map((p) => (
            <Provider value={p} key={p.data.id}>
              <Card post={p.data} />
            </Provider>
          ))}

        {!loadMore && (
          <div className={styles.observerElem} ref={bottomOfList}></div>
        )}

        {!loadMore && isLoading && (
          <div role="alert" style={{ textAlign: "center" }}>
            Загрузка...
          </div>
        )}

        {errorLoading && (
          <div role="alert" style={{ textAlign: "center" }}>
            {errorLoading}
          </div>
        )}

        {loadMore && (
          <div className={styles.contrLoadMore}>
            <button
              className={styles.btnLoadMore}
              type="button"
              role="alert"
              style={{ textAlign: "center" }}
              onClick={() => setLoadMore(false)}
            >
              Загрузить ещё
            </button>
          </div>
        )}
      </ul>
    </>
  );
}
