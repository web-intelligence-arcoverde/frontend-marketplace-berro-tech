import Image from 'next/image';
import { useRouter } from 'next/router';
import { ICONS } from '../../../assets/icons';
import React from "react";
export const Logo = () => {
  const router = useRouter();

  return (
    <Image
      src={ICONS.Logo}
      alt='logo berro tech'
      onClick={() => router.replace('/')}
      style={{ cursor: 'pointer' }}
    />
  );
};
