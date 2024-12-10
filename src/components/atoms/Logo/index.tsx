'use client'

import Image from 'next/image';
import { ICONS } from '../../../assets/icons';
import React from "react";
export const Logo = () => {

  return (
    <Image
      src={ICONS.Logo}
      alt='logo berro tech'
      style={{ cursor: 'pointer' }}
    />
  );
};
