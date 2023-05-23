import React from "react";
import { usePostsData } from "../../hooks/usePostsData";

interface IPropsPostsContextProvider {
  children: React.ReactNode;
}
interface IPostContextData {
  data: {
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
interface IPostsContextData {
  posts?: IPostContextData[];
  isLoading?: boolean;
  errorLoading?: string;
  load?: () => void;
}
export const postsContext = React.createContext<IPostsContextData>({});

export function PostsContextProvider({ children }: IPropsPostsContextProvider) {
  const data = usePostsData();

  return <postsContext.Provider value={data}>{children}</postsContext.Provider>;
}
