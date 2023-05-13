import React from "react";
import { ControlBtn } from "../../../shared/ui";
import styles from "./genericList.less";

interface IItem {
  id: string;
  text: string;
  img?: string;
  desktop: boolean;
}

interface IGenericListProps {
  data: IItem[];
  As?: "li" | "div" | "a" | "button";
  userClass?: string;
  classDesktop?: string;
}

export function GenericList({
  data,
  As = "div",
  userClass,
  classDesktop,
}: IGenericListProps) {
  return (
    <>
      {data.map(({ img, text, id, desktop }) => (
        <As
          key={id}
          className={[userClass, desktop ? classDesktop : ""].join(" ").trim()}
        >
          <ControlBtn img={img} text={text} />
        </As>
      ))}
    </>
  );
}
