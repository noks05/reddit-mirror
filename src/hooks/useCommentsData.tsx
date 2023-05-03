import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { tokenContext } from "../shared/context/tokenContext";

export function useCommentsData(postId?: string, subreddit?: string) {
  const [data, setData] = useState([]);

  const token = useContext(tokenContext);

  useEffect(() => {
    const result1 = postId !== undefined;
    const result2 = subreddit !== undefined;
    const result3 = token !== "" && token !== "undefined";

    if (result1 && result2 && result3) {
      axios
        .get(`http://api.reddit.com/r/${subreddit}/comments/${postId}?limit=25`)
        .then((resp) => {
          const commentsData = resp.data[0].data.children;
          setData(commentsData);
        })
        .catch((e) => {
          setData([]);
          console.log(e);
        });
    }
    return () => {
      setData([]);
    };
  }, [postId]);

  return [data];
}
