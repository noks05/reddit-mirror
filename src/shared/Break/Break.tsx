import React from 'react';
import styles from './break.less';
import { EColors, TSizesBreak } from '../types.global';
import classNames from 'classnames';

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
    topSize,
    mobileSize,
    topMobileSize,
    tableSize,
    topTableSize,
    desktopSize,
    topDesktopSize,
    color = EColors.white,
  } = props;

  const classes = classNames(
    styles[`s${size}`],
    styles[color],
    { [styles[`m${topSize}`]]: topSize },
    { [styles[`m${mobileSize}`]]: mobileSize },
    { [styles[`m${topMobileSize}`]]: topMobileSize },
    { [styles[`t${tableSize}`]]: tableSize },
    { [styles[`t${topTableSize}`]]: topTableSize },
    { [styles[`d${desktopSize}`]]: desktopSize },
    { [styles[`d${topDesktopSize}`]]: topDesktopSize },
  );

  return (
    <As className={classes}></As>
  );
}
