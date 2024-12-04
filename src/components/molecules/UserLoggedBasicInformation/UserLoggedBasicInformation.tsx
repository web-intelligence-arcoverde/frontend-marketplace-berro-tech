import React from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/useSelectorHook';
import { setVisibilityModalAddProduct } from '@/store/reducer/product/actions';
import { CardProfileInformation } from '../../';

import { Container, Button } from './style';

export const UserLoggedBasicInformation = () => {
  const {
    user: { products },
  } = useAppSelector((state) => state.auth);
  const { visibility_modal_add_product } = useAppSelector(
    (state) => state.product,
  );

  const dispatch = useAppDispatch();

  const productsEmpty =
    Array.isArray(products) && products.length > 0 ? true : false;

  const registerProduct = () => {
    dispatch(setVisibilityModalAddProduct(!visibility_modal_add_product));
  };

  return (
    <Container>
      <CardProfileInformation />
      {productsEmpty && (
        <Button id='first-add' onClick={registerProduct}>
          Adicionar novo negócio
        </Button>
      )}
    </Container>
  );
};
