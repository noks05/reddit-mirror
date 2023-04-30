import { useEffect, useState } from "react";
import axios from "axios";

interface ICommentsData {
  name?: any;
}

export function useCommentsData(postId: string | undefined) {
  const [data, setData] = useState<ICommentsData>({});

  useEffect(() => {
    if (postId !== "" || postId !== undefined) {
      axios
        .get(`http://api.reddit.com/r/subreddit/comments/${postId}`)
        .then((resp) => {
          // const userData = resp.data;
          setData({ name: resp });
        })
        .catch(console.log);
      console.log(data);
    }
  }, []);

  return [data];
}
