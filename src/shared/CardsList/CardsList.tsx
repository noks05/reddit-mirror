import React, { useContext, useRef } from "react";
import { Card } from "./Card";
import { cardContext } from "../context/cardContext";
import { generateRandomString } from "../../utils/react/generateRandomIndex";
import { useObserver } from "../../hooks/useObserver";
import { postsContext } from "../context/postsContext";
import { Text } from "../glop/Text";
import { Smile } from "../glop/img/Smile";
import styles from "./cardslist.less";
import { useDispatch } from "react-redux";
import { setCountLoad } from "../../store/store";

export function CardsList() {
  const { Provider } = cardContext;
  const bottomOfList = useRef(null);

  const { load, nextAfter, posts, isLoading, errorLoading } =
    useContext(postsContext);

  const { setLoadMore, loadMore } = useObserver(bottomOfList, nextAfter, load);
  const dispatch = useDispatch();

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
            <Smile />
            <Text size={28} mobileSize={16}>
              Хмм... здесь пока пусто{" "}
            </Text>
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

        {posts?.length !== 0 && loadMore && (
          <div className={styles.contr}>
            <button
              className={styles.btnLoadMore}
              type="button"
              role="alert"
              style={{ textAlign: "center" }}
              onClick={() => {
                load && load();
                setLoadMore(false);
                dispatch(setCountLoad(1));
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
