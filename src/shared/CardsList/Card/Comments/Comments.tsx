import React, { useRef, useState } from "react";
import styles from "./comments.less";
import { BoxComments } from "./BoxComments";
import { useCommentsData } from "../../../../hooks/useCommentsData";
import { useChangePadding } from "../../../../hooks/useChangePadding";
import { BtnActiveComments } from "./BtnActiveComments";

export function Comments({
  postId,
  subreddit,
}: {
  postId: string;
  subreddit: string;
}) {
  let [isActive, setIsActive] = useState(false);
  const refBtn = useRef<null | HTMLDivElement>(null);
  const [isMore, setIsMore] = useState<boolean>(false);

  let [data] = useCommentsData(postId, subreddit);
  useChangePadding(refBtn.current, isActive, isMore, data);
  // data = [...data, ...data, ...data];

  return (
    <div className={styles.container} ref={refBtn}>
      <BtnActiveComments
        data={data}
        isActive={isActive}
        setIsMore={setIsMore}
        setIsActive={setIsActive}
      ></BtnActiveComments>

      {isActive && (
        <BoxComments
          data={data}
          isActive={isActive}
          setIsActive={setIsActive}
          isMore={isMore}
          setIsMore={setIsMore}
        ></BoxComments>
      )}
    </div>
  );
}
