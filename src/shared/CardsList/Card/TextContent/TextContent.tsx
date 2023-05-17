import React from "react";
import styles from "./textcontent.less";
import { MetaData } from "./MetaData";
import { TitleCard } from "./TitleCard";

interface IPropsTextContent {
  post: {
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
  };
}
export function TextContent({ post }: IPropsTextContent) {
  return (
    <div className={styles.textContent}>
      {/* {commented && <Comments postId={id} subreddit={subreddit} />} */}

      <MetaData avatar={post.url} name={post.author} />
      <TitleCard post={post} />
    </div>
  );
}
