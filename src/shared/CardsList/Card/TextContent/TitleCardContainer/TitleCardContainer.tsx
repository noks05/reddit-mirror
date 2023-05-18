import React, { useState } from "react";
import styles from "./titlecardcontainer.less";
import { useDispatch } from "react-redux";
import { updateComment } from "../../../../../store";
import { TitleCard } from "../TitleCard/TitleCard";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  function onClick() {
    dispatch(updateComment(`${post.author}, `));
    setIsModalOpen(true);
  }
  return (
    <TitleCard
      post={post}
      onClick={onClick}
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
    />
  );
}
