'use client';


import React from 'react';

import {
  CardButton,
  Container,
  ContainerChildren,
} from './style';

import { ButtonLink } from '@/components/atoms/Button/ButtonLink';
import { Divider } from '@/components/atoms/Divider';
import { HeaderSignIn } from '@/components/molecules/HeaderSignIn';
import { FormSignIn } from '@/components/molecules/FormSignIn';



const SignIn = () => {
  return (
    <ContainerChildren>
      <Container>
        <HeaderSignIn />
        <Divider />
        <FormSignIn />
        <Divider />
        <CardButton>
          <ButtonLink link={'criar-conta'}>Criar conta</ButtonLink>
        </CardButton>
      </Container>
    </ContainerChildren>
  );
};

export default SignIn;
