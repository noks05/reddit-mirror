import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useStore } from "react-redux";
import { RootState } from "../store/store";

interface IPost {
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

interface IPostsData {
  posts?: IPost[];
}

export function usePostsData() {
  const [data, setData] = useState<IPostsData>({});

  const token = useSelector<RootState>((state) => {
    return state.token;
  });

  useEffect(() => {
    if (!token) return;
    axios
      .get("https://oauth.reddit.com/best.json?sr_detail=true", {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((resp) => {
        const postsData = resp.data.data.children;
        // console.log(resp.data.data.children);
        setData({ posts: postsData });
      })
      .catch(console.log);
    return () => {
      setData({});
    };
  }, [token]);

  return [data];
}
