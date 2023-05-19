import React from "react";
import styles from "./layout.less";
import { useToken } from "../../hooks/useToken";

interface ILayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: ILayoutProps) {
  return <div className={styles.layout}>{children}</div>;
}
