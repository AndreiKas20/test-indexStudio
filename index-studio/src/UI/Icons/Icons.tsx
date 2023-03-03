import React from 'react';
import styles from './icons.css';
import {IconCar} from "../IconCar";
import {IconHart} from "../IconHart";
import {IconShield} from "../IconShield";
import {IconGraph} from "../IconGraph";

type nameIcon =
    'IconCar'
    | 'IconHart'
    | 'IconShield'
    | 'IconGraph'


interface IIcon {
  nameIcon: nameIcon,
  height: string,
  width: string,
  noActive?: boolean,
}

export function Icons({nameIcon, height, width, noActive}: IIcon) {
  if (nameIcon === 'IconCar') {
    return (
        <IconCar width={width} height={height} noActive={noActive}/>
    )
  }
  if (nameIcon === 'IconHart') {
    return (
        <IconHart width={width} height={height} noActive={noActive}/>
    )
  }
  if (nameIcon === 'IconShield') {
    return (
        <IconShield width={width} height={height} noActive={noActive}/>
    )
  }
  if (nameIcon === 'IconGraph') {
    return (
        <IconGraph width={width} height={height} noActive={noActive}/>
    )
  }
  return (
      <div></div>
  );
}
