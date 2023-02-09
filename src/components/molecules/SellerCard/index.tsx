import {IMAGES} from '@/assets';
import {CardContact} from '@/components';
import React from 'react';
import {Container, ImageSeller} from './style';

export const SellerCard = () => {
  return (
    <Container>
      <ImageSeller src={IMAGES.Seller} alt='imagem do vendedor' />

      <CardContact />
    </Container>
  );
};
