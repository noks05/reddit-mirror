import { useEffect, useState } from "react";
import axios from "axios";
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

export function usePostsData(
  bottomListEl?: Element | null,
  loadMore?: boolean
) {
  const [isLoading, setIsLoading] = useState(false);
  const [errorLoading, setErrorLoading] = useState("");
  const [posts, setPosts] = useState<IPost[]>([]);

  const token = useSelector<RootState>((state) => {
    return state.token;
  });

  useEffect(() => {
    if (!token) return;

    async function load() {
      setIsLoading(true);
      setErrorLoading("");

      try {
        const nextAfter = localStorage.getItem("after");
        console.log(nextAfter);
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

        localStorage.setItem("after", after);
        setPosts((prevChildren: any) => prevChildren.concat(...children));
      } catch (error) {
        setErrorLoading(String(error));
      }

      setIsLoading(false);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          console.log(bottomListEl);
          load();
        }
      },
      { rootMargin: "50px" }
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
  }, [token, bottomListEl]);

  return { posts, isLoading, errorLoading };
}
