import React from 'react';
import { GenericList } from '../../../../../utils/react/GenericList';
import styles from './menudropdownlist.less'

interface IItem {
  id: string;
  text: string;
  desktop: boolean,
  img?: string;
  Item?: 'li' | 'div' | 'a' | 'button',
}

interface IContentProps {
  items: IItem[];
}

export function MenuDropdownList({ items }: IContentProps) {
  return (
    <div className={styles.dropdown}>
      <ul className={styles.menuItemsList}>
        <GenericList
          list={items}
          classItem={styles.menuItem}
          classText={styles.menuText}
          classDesktop={styles.desktop}
        />
      </ul>
      <button className={styles.closeButton}>
        Закрыть
      </button>
    </div>
  );
}
