import {FloatingLabelInput} from '@/components';
import {useAppSelector} from '@/hooks/useSelectorHook';
import React from 'react';
import {Container} from './style';

export const EditAccountInfo = () => {
  const {user} = useAppSelector((state) => state.auth);

  return (
    <Container>
      <FloatingLabelInput
        required
        type='text'
        id='accountName'
        name='accountName'
        placeholder='Nome'
      />
      <FloatingLabelInput
        required
        type='text'
        id='email'
        name='email'
        placeholder='E-mail'
      />
      <FloatingLabelInput
        required
        type='tel'
        maxLength={11}
        id='cellphone'
        name='cellphone'
        placeholder='Telefone'
      />
    </Container>
  );
};
