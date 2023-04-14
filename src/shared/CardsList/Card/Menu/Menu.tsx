import React from "react";
import { Dropdown } from "../../../Dropdown";
import { generateId } from "../../../../utils/react/generateRandomIndex";
import { MenuIcon } from "../../../icons";
import { MenuDropdownList } from "./MenuDropdownList";
import styles from "./menu.less";

const items = [
  {
    img: 'comments',
    text: "Комментарии",
    desktop: true
  },
  {
    img: 'share',
    text: "Поделиться",
    desktop: true
  },
  {
    img: 'close',
    text: "Скрыть",
    desktop: false
  },
  {
    img: 'save',
    text: "Сохранить",
    desktop: true
  },
  {
    img: 'warning',
    text: "Пожаловаться",
    desktop: false
  },
].map((obj) => generateId(obj));

export function Menu() {

  return (
    <div className={styles.menu}>
      <Dropdown
        button={
          <button className={styles.menuButton}>
            <MenuIcon />
          </button>
        }
      >
        <MenuDropdownList items={items} />
      </Dropdown>
    </div>
  );
}
