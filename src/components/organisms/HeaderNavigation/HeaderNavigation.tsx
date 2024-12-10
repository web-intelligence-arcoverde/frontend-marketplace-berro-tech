'use client'

import { useState } from 'react';
import { Navigation, CardSearch } from './style';
import React from 'react';
import { HeaderMenuNavigation } from '@/components/molecules/HeaderMenuNavigation/HeaderMenuNavigation';

import { Search } from '@/components/atoms/Search';
import { AvatarContainer } from '@/components/molecules/AvatarContainer/AvatarContainer';

export const HeaderNavigation = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Navigation>
      <HeaderMenuNavigation />
      <CardSearch>
        {
          //@ts-expect-error: Error
          <Search isFocused={isFocused} setIsFocused={setIsFocused} />
        }
      </CardSearch>
      <AvatarContainer />
    </Navigation>
  );
};
