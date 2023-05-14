import React from "react";
import { ControlBtn } from "../../../shared/ui/ControlBtn";
import styles from "./genericcontrols.less";

interface IItem {
  id: string;
  text: string;
  img?: string;
  desktop: boolean;
  onClick?: () => void;
}

interface IGenericControlsProps {
  data: IItem[];
  As?: "li" | "div" | "a" | "button";
  userClass?: string;
  classDesktop?: string;
}

export function GenericControls({
  data,
  As = "div",
  userClass,
  classDesktop,
}: IGenericControlsProps) {
  return (
    <>
      {data.map(({ img, text, id, desktop, onClick }) => (
        <As
          key={id}
          className={[userClass, desktop ? classDesktop : ""].join(" ").trim()}
        >
          <ControlBtn img={img} text={text} onClick={onClick} />
        </As>
      ))}
    </>
  );
}
