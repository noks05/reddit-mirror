import React from "react";
import styles from "./break.less";
import { EColors, TSizesBreak } from "../types.global";
import classNames from "classnames";

interface IBreakProps {
  As?: "div" | "span";
  children?: string;
  size: TSizesBreak;
  topSize?: TSizesBreak;
  mobileSize?: TSizesBreak;
  topMobileSize?: TSizesBreak;
  tableSize?: TSizesBreak;
  topTableSize?: TSizesBreak;
  desktopSize?: TSizesBreak;
  topDesktopSize?: TSizesBreak;
  color?: EColors;
}

export function Break(props: IBreakProps) {
  const {
    As = "span",
    size,
    mobileSize,
    tableSize,
    desktopSize,
    color = EColors.white,
  } = props;

  const classes = classNames(
    styles[`s${size}`],
    styles[color],
    { [styles[`m${mobileSize}`]]: mobileSize },
    { [styles[`t${tableSize}`]]: tableSize },
    { [styles[`d${desktopSize}`]]: desktopSize }
  );

  return <As className={classes}></As>;
}
