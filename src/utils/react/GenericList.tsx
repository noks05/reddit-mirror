import React from "react";
import { Icon } from "../../shared/Icon";
import { EColors } from "../../shared/types.global";
import { Text } from "../../shared/Text";
import { Break } from "../../shared/Break";

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
          {img !== undefined && <Icon name={img} size={14} color={EColors.grey99} />}

          <Break size={8} />
          <Text children={text} size={14} color={EColors.grey99} />
        </Item >
      ))
      }
    </>
  )
}
