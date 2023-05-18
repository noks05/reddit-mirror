import React from "react";
import styles from "./textcontent.less";
import { MetaData } from "./MetaData";
import { TitleCardContainer } from "./TitleCardContainer";
import { Provider } from "react-redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { legacy_createStore } from "redux";
import { rootReducer } from "../../../../store";

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

const store = legacy_createStore(rootReducer, composeWithDevTools());

export function TextContent({ post }: IPropsTextContent) {
  return (
    <div className={styles.textContent}>
      {/* {commented && <Comments postId={id} subreddit={subreddit} />} */}

      <MetaData avatar={post.sr_detail.icon_img} name={post.author} />

      <Provider store={store}>
        <TitleCardContainer post={post} />
      </Provider>
    </div>
  );
}
