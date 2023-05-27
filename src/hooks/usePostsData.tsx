import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
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

export function usePostsData() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorLoading, setErrorLoading] = useState("");
  const [posts, setPosts] = useState<IPost[]>([]);
  const [nextAfter, setNextAfter] = useState("");

  const token = useSelector<RootState, string>((state) => {
    return state.token;
  });
  // const token = "";

  async function load() {
    if (!token || token === "undefined") return;
    setIsLoading(true);
    setErrorLoading("");

    try {
      const {
        data: {
          data: { after, children },
        },
      } = await axios.get("https://oauth.reddit.com/rising?sr_detail=true", {
        headers: { Authorization: `bearer ${token}` },
        params: {
          limit: 7,
          after: nextAfter,
        },
      });

      setNextAfter(after);
      setPosts((prevChildren: any) => prevChildren.concat(...children));
    } catch (error) {
      setErrorLoading(String(error));
    }

    setIsLoading(false);
  }

  return {
    posts,
    isLoading,
    errorLoading,
    load,
    nextAfter,
  };
}
