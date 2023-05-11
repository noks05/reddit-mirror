import React, { useRef, useState } from "react";
import styles from "./comments.less";
import { BoxComments } from "./BoxComments";
import { useCommentsData } from "../../../../hooks/useCommentsData";
import { useChangePadding } from "../../../../hooks/useChangePadding";
import { BtnActiveComments } from "./BtnActiveComments";
import { commentsContext } from "../../../context/commentsContext";

export function Comments({
  postId,
  subreddit,
}: {
  postId: string;
  subreddit: string;
}) {
  const [isActive, setIsActive] = useState(false);
  const [isMore, setIsMore] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const refBtn = useRef<null | HTMLDivElement>(null);

  let [data] = useCommentsData(postId, subreddit);
  const { Provider } = commentsContext;

  useChangePadding(data, refBtn.current, isActive, isClick);
  function fixesClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (event.target instanceof Element) {
      const form = event.target?.closest(
        "[class^=boxformreasponse__container--]"
      );
      if (form) return;
      setIsClick(!isClick);
    }
  }

  return (
    <Provider
      value={{
        data,
        isMore,
        isActive,
        setIsMore,
        refBtnCurrent: refBtn.current,
      }}
    >
      <div
        className={styles.container}
        ref={refBtn}
        onClick={(e) => fixesClick(e)}
      >
        <BtnActiveComments
          data={data}
          isActive={isActive}
          setIsMore={setIsMore}
          setIsActive={setIsActive}
        ></BtnActiveComments>

        {isActive && (
          <BoxComments
            isActive={isActive}
            setIsActive={setIsActive}
            isMore={isMore}
            setIsMore={setIsMore}
          ></BoxComments>
        )}
      </div>
    </Provider>
  );
}
