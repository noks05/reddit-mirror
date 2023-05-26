import React from "react";
import { useDispatch } from "react-redux";
import { updateComment } from "../../../../../store/store";
import { TitleCard } from "../TitleCard/TitleCard";
import styles from "./titlecardcontainer.less";

interface IPropsTitleCardContainer {
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

export function TitleCardContainer({ post }: IPropsTitleCardContainer) {
  const dispatch = useDispatch();
  function onClick() {
    dispatch(updateComment(`${post.author}, `));
  }
  return <TitleCard post={post} onClick={onClick} />;
}
