import React from "react";
import styles from "./icon.less";
import { EColors, TSizes } from "../../types.global";
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
  UpIcon,
  DownIcon,
  ArrowsIcon,
  PictureIcon,
  FileIcon,
  DownloadIcon,
  AvatarIcon,
  ReloadIcon,
  LinkIcon,
  PenIcon,
  UnderlineIcon,
  PdfIcon,
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
  up: <UpIcon />,
  down: <DownIcon />,
  arrows: <ArrowsIcon />,
  picture: <PictureIcon />,
  file: <FileIcon />,
  download: <DownloadIcon />,
  avatar: <AvatarIcon />,
  reload: <ReloadIcon />,
  link: <LinkIcon />,
  pen: <PenIcon />,
  underline: <UnderlineIcon />,
  pdf: <PdfIcon />,
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
  up = "up",
  down = "down",
  arrows = "arrows",
  picture = "picture",
  file = "file",
  download = "download",
  avatar = "avatar",
  reload = "reload",
  link = "link",
  pen = "pen",
  underline = "underline",
  pdf = "pdf",
}

interface IIconProps {
  As?: "div" | "span" | "img";
  children?: string | React.ReactNode;
  name?: string;
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
    children,
  } = props;

  const classes = classNames(
    styles[`s${size}`],
    styles[color],
    { [styles[`m${mobileSize}`]]: mobileSize },
    { [styles[`t${tableSize}`]]: tableSize },
    { [styles[`d${desktopSize}`]]: desktopSize }
  );

  return (
    <As className={[classes, userClass, styles.defaultFlex].join(" ").trim()}>
      {name ? allIcons[name] : children}
    </As>
  );
}
