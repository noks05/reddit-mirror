import React from "react";
import { usePostsData } from "../../hooks/usePostsData";

interface IPropsPostsContextProvider {
  children: React.ReactNode;
}
interface IPostContextData {
  data: {
    id: string;
    author: string;
    sr_detail: {
      icon_img: string;
    };
    url: string;
    title: string;
  };
}
interface IPostsContextData {
  posts?: IPostContextData[];
}
export const postsContext = React.createContext<IPostsContextData>({});

export function PostsContextProvider({ children }: IPropsPostsContextProvider) {
  const [data] = usePostsData();

  return <postsContext.Provider value={data}>{children}</postsContext.Provider>;
}
