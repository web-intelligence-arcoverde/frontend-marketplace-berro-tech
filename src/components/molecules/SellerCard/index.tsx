/* eslint-disable no-extra-boolean-cast */
import { ICONS } from '@/assets';
import { CardContact, CardNameLocation } from '@/components';
import React from 'react';
import { Container, ImageSeller } from './style';
import { useAppSelector } from '@/hooks/useSelectorHook';

export const SellerCard = () => {
  const {
    user_by_id: { name, avatar_url, addresses, contacts },
  } = useAppSelector((state) => state.user);

  const { city, state } = addresses.length > 0 && addresses[0];

  const showCity = city ? city : '';
  const showState = !!state ? state : '';

  const phone = contacts.length > 1 ? contacts[0].phone_number : '';

  return (
    <Container>
      <ImageSeller
        src={!!avatar_url ? avatar_url : ICONS.Avatar}
        alt='imagem do vendedor'
        width='384'
        height='358'
      />

      <CardNameLocation name={name} city={showCity} state={showState} />
      <CardContact phone={phone} />
    </Container>
  );
};
