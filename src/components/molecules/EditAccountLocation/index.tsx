/* eslint-disable @typescript-eslint/no-explicit-any */
import { FloatingLabelRadio } from '@/components';
import { useAppDispatch, useAppSelector } from '@/hooks/useSelectorHook';
import {
  Container,
  ContainerInputs,
  NextButton,
  NextButtonContainer,
  ContainerTitle,
} from './style';
import { userEditLocationInformationRequest } from '@/store/reducer/auth/actions';
import { IEditUserLocationProps } from '@/store/reducer/auth/types';
import { showModalEditUser } from '@/store/reducer/user/actions';
import React, { useState } from 'react';
import { readCityByUfRequest } from '@/store/reducer/product/actions';

export const EditAccountLocation = () => {
  const {
    user: { addresses },
  } = useAppSelector((state) => state.auth);

  const address =
    addresses.length > 0
      ? {
        state: addresses[0].state,
        city: addresses[0].city,
      }
      : {
        state: '',
        city: '',
      };

  const [productInfo, setProductInfo] = useState({
    state: address.state,
    city: address.city,
  });

  const onChange = (name: string, value: string | number) => {
    setProductInfo({ ...productInfo, [name]: value });
  };

  const dispatch = useAppDispatch();
  const formData = {} as IEditUserLocationProps;

  const { states, cities } = useAppSelector((state) => state.product);


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const inputs = form.querySelectorAll<HTMLInputElement>('[name]');

    inputs.forEach((input) => {
      const { name, value } = input;
      formData[name] = value;
    });

    dispatch(userEditLocationInformationRequest(formData));
    dispatch(showModalEditUser({ formData, step: 0 }));
  };

  const isEmptyCities = cities.length < 1

  return (
    <Container onSubmit={handleSubmit}>
      <ContainerTitle>
        <h2>Alterar endereço</h2>
        <ContainerInputs>
          <FloatingLabelRadio
            required
            placeholder='Estados'
            name='state'
            id='state'
            setItem={(item: any) => dispatch(readCityByUfRequest(item.acronym))}
            labels={states}
            value={productInfo.state}
            setValue={(event: any) => {
              const newValue = event.target.value
              onChange('state', newValue)
            }}
          />
          <FloatingLabelRadio
            required
            placeholder='Cidades'
            name='city'
            id='city'
            disabled={isEmptyCities}
            labels={cities}
            setValue={(event: any) => onChange('city', event.target.value)}
            value={productInfo.city}
          />
        </ContainerInputs>
      </ContainerTitle>
      <NextButtonContainer>
        <NextButton type='submit'>Confirmar alteração</NextButton>
      </NextButtonContainer>
    </Container>
  );
};
