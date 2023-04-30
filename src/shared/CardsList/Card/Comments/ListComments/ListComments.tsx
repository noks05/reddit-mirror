import React, { useEffect, useState } from "react";
import styles from "./listcomments.less";
import { EIcons, Icon } from "../../../../Icon";
import { Text } from "../../../../Text";
import { EColors } from "../../../../types.global";
import { Break } from "../../../../Break";
import { useCommentsData } from "../../../../../hooks/useCommentsData";
interface IPropsListComments {
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
}

export function ListComments({ isActive, setIsActive }: IPropsListComments) {
  const [open, setOpen] = useState<boolean>(false);
  const [postId, setPostId] = useState<string>("");
  const [postData, setPostData] = useState({});

  // useEffect(() => {
  //   const data = useCommentsData(postId);
  //   setPostData(data);
  //   console.log(data);
  // }, [postId]);

  function openComments(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setOpen(!open);
    if (!e.target) return null;

    const id = (e.target as HTMLElement).closest("[class^=card__card--]")?.id;
    if (!id) return null;
    setPostId(id);
  }
  return (
    <div className={styles.listBox}>
      <Icon
        name="rainbow"
        color={EColors.orange}
        userClass={styles.rainbow}
      ></Icon>

      <ul>
        <li>
          <div className={styles.user}>
            <Icon name={EIcons.anon} size={20}></Icon>
            <Break size={8}></Break>
            <Text size={14} color={EColors.orange}>
              Константин Кодов
            </Text>
          </div>

          <Text
            size={14}
            color={EColors.black}
            As="p"
            userClass={styles.lineHeight24}
          >
            Банальные, но&nbsp;неопровержимые выводы, а&nbsp;также многие
            известные личности лишь добавляют фракционных разногласий
            и&nbsp;рассмотрены исключительно в&nbsp;разрезе маркетинговых
            и&nbsp;финансовых предпосылок. Таким образом, постоянное
            информационно-пропагандистское обеспечение нашей деятельности
            является качественно новой ступенью прогресса профессионального
            сообщества.
          </Text>
        </li>
      </ul>

      <button onClick={(e) => openComments(e)} type="button">
        <Text size={14} color={EColors.orange} userClass={styles.lineHeight24}>
          + ещё 3&nbsp;ваших комментария
        </Text>
      </button>

      <button className={styles.close} onClick={() => setIsActive(!isActive)}>
        <Icon name={EIcons.closeX} size={14} color={EColors.greyC4}></Icon>
      </button>
    </div>
  );
}
