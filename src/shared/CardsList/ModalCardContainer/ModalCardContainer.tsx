import React, { useContext, useEffect, useRef } from "react";
import { ModalCard } from "../ModalCard/ModalCard";
import ReactDOM from "react-dom";
import { postsContext } from "../../context/postsContext";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./modalcardcontainer.less";

export function ModalCardContainer() {
  const navigate = useNavigate();
  const modalRef = useRef<HTMLDivElement>(null);

  const { posts } = useContext(postsContext);
  const { id } = useParams();
  const post = posts?.find((post) => {
    return post.data.id === id;
  });

  if (typeof window === "undefined") return null;
  const portalRoot = document.getElementById("portal-root");
  if (!portalRoot) return null;
  if (!post) return null;

  useEffect(() => {
    function handleClick(e: Event) {
      if (e.target instanceof Node) {
        const clickOut = !modalRef.current?.contains(e.target);
        const clickCloseBtn = modalRef.current
          ?.querySelector("[class^='modalcard__closeBtn--']")
          ?.contains(e.target);

        if (clickOut || clickCloseBtn) {
          navigate("/posts", { replace: true });
        }
      }
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  return ReactDOM.createPortal(
    <ModalCard post={post.data} ref={modalRef} />,
    portalRoot
  );
}
