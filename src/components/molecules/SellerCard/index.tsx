import {ICONS} from '@/assets';
import {CardContact, CardNameLocation} from '@/components';
import React from 'react';
import {Container, ImageSeller} from './style';
import {useAppSelector} from '@/hooks/useSelectorHook';

export const SellerCard = () => {
  return (
    <Container>
      <ImageSeller
        src={ICONS.Avatar}
        alt='imagem do vendedor'
        width='100'
        height='100'
      />
      <CardNameLocation
        name={'Brunno guedes'}
        city={'Campina Grande'}
        state={'paraiba'}
      />
      <CardContact />
    </Container>
  );
};
