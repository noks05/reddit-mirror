import React from "react";

interface ICardContext {
  data?: {
    subreddit: string;
    url: string;
    author: string;
    sr_detail: { icon_img: string };
    title: string;
    score: string;
  };
}
export const cardContext = React.createContext<ICardContext>({});
