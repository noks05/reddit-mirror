import { useContext, useEffect, useState } from "react";
import axios from "axios";

interface ICommentsData {
  data: {
    id: string;
    author: string;
    body: string;
  };
}

export function useCommentsData(postId: string, subreddit: string) {
  const [data, setData] = useState<ICommentsData[]>([]);

  useEffect(() => {
    axios
      .get(`http://api.reddit.com/r/${subreddit}/comments/${postId}`)
      .then((resp) => {
        const commentsData = resp.data[1].data.children;
        console.log(resp.data[1].data.children);
        setData(commentsData);
      })
      .catch((e) => {
        setData([]);
        console.log(e);
      });

    return () => {
      setData([]);
    };
  }, [postId]);

  return [data];
}
