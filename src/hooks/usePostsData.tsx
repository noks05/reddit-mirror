import { useContext, useEffect, useState } from "react";
import { tokenContext } from "../shared/context/tokenContext";
import axios from "axios";

interface IPost {
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

interface IPostsData {
  posts?: IPost[];
}

export function usePostsData() {
  const [data, setData] = useState<IPostsData>({});

  const token = useContext(tokenContext);

  useEffect(() => {
    if (token !== "" && token !== "undefined") {
      axios
        .get("https://oauth.reddit.com/new.json?sr_detail=true", {
          headers: { Authorization: `bearer ${token}` },
        })
        .then((resp) => {
          const postsData = resp.data.data.children;
          setData({ posts: postsData });
        })
        .catch(console.log);
    }
  }, [token]);

  return [data];
}
