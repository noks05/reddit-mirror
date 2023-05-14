import React from "react";
import styles from "./separate.less";
import { EColors } from "../../types.global";
import classNames from "classnames";

interface IPropsSeparate {
  As?: "div" | "span";
  size?: "1" | "2" | "3";
  color?: EColors;
  userClass?: string;
}

export function Separate(props: IPropsSeparate) {
  const {
    As = "div",
    size = "1",
    color = EColors.greyEC,
    userClass = "",
  } = props;

  const classes = classNames(styles[`s${size}`], styles[color]);

  return <As className={[classes, userClass].join(" ")} />;
}
