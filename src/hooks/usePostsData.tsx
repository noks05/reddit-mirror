import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState, setAfter } from "../store/store";

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

export function usePostsData(bottomListEl?: Element | null) {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorLoading, setErrorLoading] = useState("");
  // const [nextAfter, setNextAfter] = useState("");
  const dispatch = useDispatch();

  const token = useSelector<RootState>((state) => {
    return state.token;
  });
  const nextAfter = useSelector<RootState>((state) => {
    return state.nextAfter;
  });

  useEffect(() => {
    if (!token) return;

    async function load() {
      setIsLoading(true);
      setErrorLoading("");

      try {
        const {
          data: {
            data: { after, children },
          },
        } = await axios.get(
          "https://oauth.reddit.com/best.json?sr_detail=true",
          {
            headers: { Authorization: `bearer ${token}` },
            params: {
              limit: 7,
              after: nextAfter,
            },
          }
        );

        dispatch(setAfter(after));
        setPosts((prevChildren) => prevChildren.concat(...children));
      } catch (error) {
        setErrorLoading(String(error));
      }

      setIsLoading(false);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          load();
        }
      },
      { rootMargin: "10px" }
    );

    if (bottomListEl) {
      observer.observe(bottomListEl);
    }

    return () => {
      if (bottomListEl) {
        observer.unobserve(bottomListEl);
      }
      setPosts([]);
    };
  }, [token]);

  return { posts, isLoading, errorLoading };
}
