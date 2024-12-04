import { useState } from 'react';
import { HeaderMenuNavigation, Search, AvatarContainer } from '@/components';
import { Navigation, CardSearch } from './style';
import React from 'react';

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
