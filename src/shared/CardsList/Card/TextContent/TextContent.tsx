import React from "react";
import styles from "./textcontent.less";
import { Comments } from "../Comments";
import { MetaData } from "./MetaData";
import { TitleCard } from "./TitleCard";

interface IPropsTextContent {
  name: string;
  avatar: string;
  title: string;
  id: string;
  isSubreddit?: boolean;
  subreddit: string;
  commented?: boolean;
}

export function TextContent({
  id,
  subreddit,
  name,
  avatar,
  title,
  commented,
}: IPropsTextContent) {
  return (
    <div className={styles.textContent}>
      {commented && <Comments postId={id} subreddit={subreddit} />}

      <MetaData avatar={avatar} name={name} />
      <TitleCard title={title} />
    </div>
  );
}
