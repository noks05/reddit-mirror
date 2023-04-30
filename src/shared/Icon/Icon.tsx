import React from "react";
import styles from "./icon.less";
import { EColors, TSizes } from "../types.global";
import classNames from "classnames";
import {
  CloseIcon,
  CloseIconX,
  CommentsIcon,
  MenuIcon,
  SaveIcon,
  ShareIcon,
  WarningIcon,
  IconAnon,
  RainbowIcon,
} from "../icons";

interface IIconsObject {
  [key: string]: React.ReactNode;
}

const allIcons: IIconsObject = {
  comments: <CommentsIcon />,
  save: <SaveIcon />,
  share: <ShareIcon />,
  warning: <WarningIcon />,
  close: <CloseIcon />,
  closeX: <CloseIconX />,
  menu: <MenuIcon />,
  anon: <IconAnon />,
  rainbow: <RainbowIcon />,
};

export enum EIcons {
  comments = "comments",
  save = "save",
  share = "share",
  warning = "warning",
  close = "close",
  closeX = "closeX",
  menu = "menu",
  anon = "anon",
  rainbow = "rainbow",
}

interface IIconProps {
  As?: "div" | "span";
  children?: string;
  name: string;
  size?: TSizes;
  mobileSize?: TSizes;
  tableSize?: TSizes;
  desktopSize?: TSizes;
  color?: EColors;
  userClass?: string;
}

export function Icon(props: IIconProps) {
  const {
    As = "span",
    name,
    size,
    mobileSize,
    tableSize,
    desktopSize,
    color = EColors.greyEC,
    userClass,
  } = props;

  const classes = classNames(
    styles[`s${size}`],
    styles[color],
    { [styles[`m${mobileSize}`]]: mobileSize },
    { [styles[`t${tableSize}`]]: tableSize },
    { [styles[`d${desktopSize}`]]: desktopSize }
  );

  return (
    <As className={[classes, userClass].join(" ").trim()}>{allIcons[name]}</As>
  );
}
