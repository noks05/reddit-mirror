import React, { useRef, useState } from "react";
import styles from "./comments.less";
import { EIcons, Icon } from "../../../Icon";
import { Break } from "../../../Break";
import { Text } from "../../../Text";
import { EColors } from "../../../types.global";
import { ListComments } from "./ListComments";
import { useCommentsData } from "../../../../hooks/useCommentsData";
import { useChangePadding } from "../../../../hooks/useChangePadding";

export function Comments() {
  let [isActive, setIsActive] = useState(false);
  const refBtn = useRef<null | HTMLButtonElement>(null);
  const [postId, setPostId] = useState<string>("");
  const [isMore, setIsMore] = useState<boolean>(false);

  function openComments(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setIsActive(!isActive);
    setIsMore(false);

    if (!isActive) return;
    const id = (e.target as HTMLElement).closest("[class^=card__card--]")?.id;
    setPostId(id ? id : "");
  }

  const [data] = useCommentsData(postId);

  useChangePadding(refBtn.current, isActive, isMore);

  return (
    <div className={styles.container}>
      <button
        type="button"
        className={styles.button}
        onClick={(e) => openComments(e)}
        ref={refBtn}
      >
        <Icon
          name={EIcons.comments}
          size={14}
          As="div"
          color={isActive ? EColors.orange : EColors.grey99}
        ></Icon>
        <Break size={4}></Break>
        <Text size={14} color={isActive ? EColors.orange : EColors.grey99}>
          Комментарий
        </Text>
      </button>

      {isActive && (
        <ListComments
          data={data}
          isActive={isActive}
          setIsActive={setIsActive}
          isMore={isMore}
          setIsMore={setIsMore}
        ></ListComments>
      )}
    </div>
  );
}
