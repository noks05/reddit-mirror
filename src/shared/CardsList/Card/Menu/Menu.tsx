import React, { useState } from "react";
import { Dropdown } from "../../../Dropdown";
import { generateId } from "../../../../utils/react/generateRandomIndex";
import { MenuIcon } from "../../../glop/icons";
import { MenuDropdownList } from "./MenuDropdownList";
import styles from "./menu.less";

const items = [
  {
    img: "comments",
    text: "Комментарии",
    desktop: true,
  },
  {
    img: "share",
    text: "Поделиться",
    desktop: true,
  },
  {
    img: "close",
    text: "Скрыть",
    desktop: false,
  },
  {
    img: "save",
    text: "Сохранить",
    desktop: true,
  },
  {
    img: "warning",
    text: "Пожаловаться",
    desktop: false,
  },
].map((obj) => generateId(obj));

export function Menu() {
  let [coordinates, setСoordinates] = useState({ top: 0, left: 0 });

  function getPosition(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation();
    let x = 0;
    let y = 0;

    if (e.pageX || e.pageY) {
      x = e.pageX;
      y = e.pageY;
    } else if (e.clientX || e.clientY) {
      x =
        e.clientX +
        document.body.scrollLeft +
        document.documentElement.scrollLeft;
      y =
        e.clientY +
        document.body.scrollTop +
        document.documentElement.scrollTop;
    }

    setСoordinates({ top: y, left: x });
  }

  return (
    <div className={styles.menu} onClick={(e) => getPosition(e)}>
      <Dropdown
        button={
          <button className={styles.menuButton}>
            <MenuIcon />
          </button>
        }
      >
        <MenuDropdownList items={items} coordinates={coordinates} />
      </Dropdown>
    </div>
  );
}
