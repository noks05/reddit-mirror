import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ModalCardContainer } from "../CardsList/ModalCardContainer";
import { NotFound } from "../NotFound";
import styles from "./routesposts.less";

export function RoutesPosts({ Layout }: { Layout: React.ReactNode }) {
  return (
    <Routes>
      <Route path="/posts" element={Layout} />
      <Route path="/posts/:id" element={<ModalCardContainer />} />
      <Route path="/auth" element={<Navigate to="/posts" replace={true} />} />
      <Route path="/" element={<Navigate to="/posts" replace={true} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
