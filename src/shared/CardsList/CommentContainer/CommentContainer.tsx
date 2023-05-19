import React, { useState } from "react";
import styles from "./commentcontainer.less";
import { useDispatch } from "react-redux";
import { updateComment } from "../../../store/store";
import { Comment } from "../Comment/Comment";
import { generateId } from "../../../utils/react/generateRandomIndex";

export function CommentContainer({
  comment,
  controls,
}: {
  comment: any;
  controls?: string[];
}) {
  const [isForm, setIsForm] = useState(false);
  const dispatch = useDispatch();

  const data = [
    {
      img: "comments",
      text: "Ответить",
      desktop: true,
      onClick: (e: MouseEvent) => {
        e.stopPropagation();
        setIsForm(!isForm);
        dispatch(updateComment(`${comment.data.author}, `));
      },
    },
    {
      img: "share",
      text: "Поделиться",
      desktop: true,
    },
    {
      img: "warning",
      text: "Пожаловаться",
      desktop: true,
    },
    {
      img: "close",
      text: "Скрыть",
      desktop: false,
    },
    {
      img: "save",
      text: "Сохранить",
      desktop: true,
    },
  ].map((obj) => generateId(obj));

  let filteredData: any[] = [];
  if (controls) {
    filteredData = controls
      .map((str) => {
        return data.find((obj) => obj.text === str);
      })
      .filter((el) => el !== undefined);
  }

  return (
    <Comment
      author={comment.data.author}
      subreddit={comment.data.subreddit}
      body={comment.data.body}
      data={filteredData}
      isForm={isForm}
    />
  );
}
