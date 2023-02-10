import Image from 'next/image';

import {useState} from 'react';

import {HeaderMenuNavigation, Search, AvatarContainer} from '@/components';

import {ICONS} from '@/assets';

import {Navigation, ButtonMenu} from './style';

export const HeaderNavigation = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Navigation>
      {!isFocused && <HeaderMenuNavigation />}
      {isFocused && (
        <ButtonMenu>
          <Image src={ICONS.Menu} alt='icone do menu' />
        </ButtonMenu>
      )}

      {
        //@ts-ignore
        <Search isFocused={isFocused} setIsFocused={setIsFocused} />
      }

      <AvatarContainer />
    </Navigation>
  );
};
