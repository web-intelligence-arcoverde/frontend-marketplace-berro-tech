/* eslint-disable @typescript-eslint/no-explicit-any */
import { FloatingLabelRadio } from '@/components';
import { useAppDispatch, useAppSelector } from '@/hooks/useSelectorHook';
import { closeModalUpdateProduct, readCityByUfRequest, readStatesRequest, updateProductLocationRequest } from '@/store/reducer/product/actions';
import { ProductLocationType } from '@/store/reducer/product/types';
import {
  Container,
  ContainerInputs,
  NextButton,
  NextButtonContainer,
  ContainerTitle,
} from './style';

import React, { useEffect, useState } from 'react';

export const EditLocation = () => {
  const dispatch = useAppDispatch();
  const formData = {} as ProductLocationType;

  const {
    product_by_id: { products },
  } = useAppSelector((state) => state.product);

  const { address, id } = products;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const inputs = form.querySelectorAll<HTMLInputElement>('[name]');
    inputs.forEach((input) => {
      const { name, value } = input;
      formData[name] = value;
    });

    dispatch(updateProductLocationRequest({ id, formData }));

    dispatch(closeModalUpdateProduct(false));
  };

  const [productInfo, setProductInfo] = useState(address);

  const onChange = (name: string, value: any) => {
    setProductInfo({ ...productInfo, [name]: value });
  };

  const [uf, setUf] = useState({ acronym: '' })


  useEffect(() => {
    dispatch(readStatesRequest())
  }, [])

  useEffect(() => {
    if (uf.acronym) {
      dispatch(readCityByUfRequest(uf.acronym))
    }
  }, [uf])

  const { states, cities } = useAppSelector((state) => state.product)

  return (
    <Container onSubmit={handleSubmit}>
      <ContainerTitle>
        <h2>Usar sua localização padrão</h2>
        <ContainerInputs>
          <FloatingLabelRadio
            required
            placeholder='Estados'
            name='state'
            id='state'
            setItem={setUf}
            labels={states}
            value={productInfo.state}
            setValue={(event: any) => {
              onChange('state', event.target.value);
            }}
          />
          <FloatingLabelRadio
            required
            placeholder='Cidades'
            name='city'
            id='city'
            labels={cities}
            setValue={(event: any) => onChange('city', event.target.value)}
            value={productInfo.city}
          />
        </ContainerInputs>
      </ContainerTitle>
      <NextButtonContainer>
        <NextButton type='submit'>Salvar</NextButton>
      </NextButtonContainer>
    </Container>
  );
};
