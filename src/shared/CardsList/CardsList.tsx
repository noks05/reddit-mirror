import React, { useEffect, useRef } from "react";
import { Card } from "./Card";
import styles from "./cardslist.less";
import { cardContext } from "../context/cardContext";
import { usePostsData } from "../../hooks/usePostsData";

export function CardsList() {
  const { Provider } = cardContext;
  const bottomOfList = useRef(null);

  const { posts, isLoading, errorLoading } = usePostsData(bottomOfList.current);
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       if (load && !entries[0].isIntersecting) {
  //         console.log(load);
  //         load();
  //       }
  //     },
  //     { rootMargin: "10px" }
  //   );

  //   if (bottomOfList.current) {
  //     observer.observe(bottomOfList.current);
  //   }

  //   return () => {
  //     if (bottomOfList.current) {
  //       observer.unobserve(bottomOfList.current);
  //     }
  //   };
  // }, [load]);

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

        <div ref={bottomOfList}></div>

        {isLoading && (
          <div role="alert" style={{ textAlign: "center" }}>
            Загрузка...
          </div>
        )}

        {errorLoading && (
          <div role="alert" style={{ textAlign: "center" }}>
            {errorLoading}
          </div>
        )}
      </ul>
    </>
  );
}
