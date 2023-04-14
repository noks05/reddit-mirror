import React from "react";
import styles from "./text.less";
import classNames from "classnames";
import { TSizes, EColors } from "../types.global";

interface ITextProps {
  As?: "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "div";
  children?: string;
  size: TSizes;
  mobileSize?: TSizes;
  tableSize?: TSizes;
  desktopSize?: TSizes;
  color?: EColors;
}

export function Text(props: ITextProps) {
  const {
    As = "span",
    color = EColors.black,
    children,
    size,
    mobileSize,
    tableSize,
    desktopSize,
  } = props;

  const classes = classNames(
    styles[`s${size}`],
    styles[color],
    { [styles[`m${mobileSize}`]]: mobileSize },
    { [styles[`t${tableSize}`]]: tableSize },
    { [styles[`d${desktopSize}`]]: desktopSize }
  );

  return (
    <As className={classes}>
      {children}
    </As>
  );
}
