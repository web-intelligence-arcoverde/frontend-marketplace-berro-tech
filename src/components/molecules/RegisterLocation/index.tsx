import { FloatingLabelRadio } from '@/components';
import { useAppDispatch, useAppSelector } from '@/hooks/useSelectorHook';
import { addProductLocation, readCityByUfRequest, readStatesRequest } from '@/store/reducer/product/actions';
import { ProductLocationType } from '@/store/reducer/product/types';
import React, { useEffect, useState } from 'react';
import {
  Container,
  ContainerInputs,
  NextButton,
  NextButtonContainer,
  ContainerTitle,
} from './style';

const RegisterLocation = (props: any) => {
  const dispatch = useAppDispatch();

  const { states, cities } = useAppSelector((state) => state.product)

  const formData = {} as ProductLocationType;

  const [productInfo, setProductInfo] = useState({ state: '', city: '' });
  const [uf, setUf] = useState({ acronym: '' })

  const onChange = (name: string, value: any) => {
    setProductInfo({ ...productInfo, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const inputs = form.querySelectorAll<HTMLInputElement>('[name]');
    inputs.forEach((input) => {
      const { name, value } = input;
      formData[name] = value;
    });

    dispatch(addProductLocation(formData));
    props?.registerProduct();
  };


  useEffect(() => {
    dispatch(readStatesRequest())
  }, [])

  useEffect(() => {
    if (!!uf.acronym) {
      dispatch(readCityByUfRequest(uf.acronym))
    }
  }, [uf])

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
        <NextButton type='submit'>Salvar alterações</NextButton>
      </NextButtonContainer>
    </Container>
  );
};

export default RegisterLocation;
