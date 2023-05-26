import React, { LegacyRef } from "react";
import styles from "./modalcard.less";
import { EIcons, Icon } from "../../glop/Icon";
import { EColors } from "../../types.global";
import { CarmaCounter } from "../Card/Controls/CarmaCounter";
import { Break } from "../../Break";
import { MetaData } from "../Card/TextContent/MetaData";
import { Text } from "../../glop/Text";
import { ModalCommentsList } from "./ModalCommentsList";
import { Separate } from "../../glop/Separate/Separate";
import { FormComments } from "../FormComments";

interface IPost {
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
}

interface IPropsModalCard {
  post: IPost;
}

export const ModalCard = React.forwardRef(
  ({ post }: IPropsModalCard, ref: LegacyRef<HTMLDivElement>) => {
    return (
      <div className={styles.wrapper}>
        <div className={styles.box} ref={ref}>
          <button className={styles.closeBtn}>
            <Icon
              name={EIcons.closeX}
              size={14}
              color={EColors.greyC4}
              userClass="closeBtn"
            />
          </button>

          <div className={styles.title}>
            <CarmaCounter score={post.score} classUser={styles.karmaCounter} />
            <Break size={22} />
            <div className={styles.textTitle}>
              <Text As="h1" size={20} userClass={styles.titleTitle}>
                {post.title}
              </Text>
              <MetaData
                name={post.author}
                avatar={post.sr_detail.icon_img}
                subreddit={post.subreddit}
              />
            </div>
          </div>

          <Text size={14}>{post.sr_detail.description}</Text>

          <Separate userClass={styles.separate} color={EColors.greyD9} />

          <FormComments />

          <Separate userClass={styles.separate} color={EColors.greyD9} />

          <ModalCommentsList id={post.id} subreddit={post.subreddit} />
        </div>
      </div>
    );
  }
);
