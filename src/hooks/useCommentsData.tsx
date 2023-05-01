import { useEffect, useState } from "react";
import axios from "axios";

export function useCommentsData(postId: string | undefined) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (postId !== "" || postId !== undefined) {
      axios
        .get(`http://api.reddit.com/r/subreddit/comments/${postId}`)
        .then((resp) => {
          const commentsData = resp.data.data.children;
          setData(commentsData);
        })
        .catch((e) => {
          setData([]);
          console.log(e);
        });
    }
  }, [postId]);

  return [data];
}
