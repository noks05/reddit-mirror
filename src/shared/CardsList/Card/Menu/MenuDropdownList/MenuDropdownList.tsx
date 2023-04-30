import React from "react";
import { GenericList } from "../../../../../utils/react/GenericList";
import ReactDOM from "react-dom";
import styles from "./menudropdownlist.less";

interface IItem {
  id: string;
  text: string;
  desktop: boolean;
  img?: string;
  Item?: "li" | "div" | "a" | "button";
}

interface IContentProps {
  items: IItem[];
  coordinates: { top: number; left: number };
}

export function MenuDropdownList({ items, coordinates }: IContentProps) {
  if (typeof window === "undefined") return null;

  const portalRoot = document.getElementById("portal-root");
  if (!portalRoot) return null;

  const positionDropdown = {
    top: coordinates.top,
    left: coordinates.left,
  };

  return ReactDOM.createPortal(
    <div className={styles.dropdown} style={positionDropdown}>
      <ul className={styles.menuItemsList}>
        <GenericList
          list={items}
          classItem={styles.menuItem}
          classDesktop={styles.desktop}
        />
      </ul>
      <button className={styles.closeButton}>Закрыть</button>
    </div>,
    portalRoot
  );
}
