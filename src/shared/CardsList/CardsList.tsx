import React, { useContext, useRef } from "react";
import { Card } from "./Card";
import styles from "./cardslist.less";
import { cardContext } from "../context/cardContext";
import { generateRandomString } from "../../utils/react/generateRandomIndex";
import { useObserver } from "../../hooks/useObserver";
import { postsContext } from "../context/postsContext";

export function CardsList() {
  const { Provider } = cardContext;
  const bottomOfList = useRef(null);
  const { load, nextAfter, posts, isLoading, errorLoading } =
    useContext(postsContext);
  const { setCountLoad, setLoadMore, loadMore } = useObserver(
    bottomOfList,
    nextAfter,
    load
  );

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
                load && load();
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
