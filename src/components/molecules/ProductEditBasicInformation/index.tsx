/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppDispatch, useAppSelector } from '@/hooks/useSelectorHook';
import { closeModalUpdateProduct, updateProductBasicInformationRequest } from '@/store/reducer/product/actions';
import React from 'react';
import {
  ContainerForm,
  FirstColumn,
  TitleStep,
  SecondColumn,
  AboutBussines,
  NextButton,
} from './style';
import { ProductLocationType } from '@/store/reducer/product/types';

import { EditProductInfo, EditProductBussines } from '../../';

export const ProductEditBasicInformation = () => {
  const dispatch = useAppDispatch();
  const formData = {} as ProductLocationType;

  const {
    product_by_id: { products },
  } = useAppSelector((state) => state.product);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const inputs = form.querySelectorAll<HTMLInputElement>('[name]');
    inputs.forEach((input: any) => {
      const { name, value } = input;
      formData[name] = value;
    });

    dispatch(
      updateProductBasicInformationRequest({ id: products.id, ...formData }),
    );

    dispatch(closeModalUpdateProduct(false))

  };

  return (
    <ContainerForm onSubmit={handleSubmit}>
      <FirstColumn>
        <TitleStep>Sobre o produto</TitleStep>
        <EditProductInfo />
      </FirstColumn>
      <SecondColumn>
        <AboutBussines>
          <TitleStep>Sobre o negócio</TitleStep>
          <EditProductBussines />
          <NextButton type='submit'>Atualizar</NextButton>
        </AboutBussines>
      </SecondColumn>
    </ContainerForm>
  );
};
