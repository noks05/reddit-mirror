import React from "react";
import { Icon } from "../../shared/Icon";
import { EColors } from "../../shared/types.global";
import { Text } from "../../shared/Text";

interface IItem {
  id: string;
  text: string;
  img?: string;
  desktop: boolean;
  Item?: 'li' | 'div' | 'a' | 'button',
}

interface IGenericListProps {
  list: IItem[];
  classItem?: string,
  classText?: string,
  classDesktop?: string,
}

export function GenericList({ list, classItem, classText, classDesktop }: IGenericListProps) {

  return (
    <>
      {list.map(({ Item = 'li', img, text, id, desktop }) => (
        <Item
          key={id}
          className={[classItem, desktop ? classDesktop : ''].join(' ').trim()}
        >
          {img !== undefined && <Icon name={img} size={14}/>}

          <span className={classText}>
            <Text children={text} size={14} color={EColors.grey66}/>
          </span>
        </Item >
      ))
      }
    </>
  )
}