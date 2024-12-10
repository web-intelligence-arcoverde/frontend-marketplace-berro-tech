'use client'

import React from 'react';

import { ContainerNavigation, ItemNavigation, Row } from './style';

import Link from 'next/link';

export const HeaderMenuNavigation = () => {

  const optionInit = true;
  const optionBussiness = false;

  const styleInit = optionInit ? 'brightness' : '';
  const styleBussiness = optionBussiness ? 'brightness' : '';

  return (
    <ContainerNavigation>
      <ItemNavigation>
        <Link href='/'>
          <li id={styleInit}>Início</li>
          {optionInit && <Row />}
        </Link>
      </ItemNavigation>
      <ItemNavigation>
        <Link href='/negocios'>
          <li id={styleBussiness}>Negócios</li>
          {optionBussiness && <Row />}
        </Link>
      </ItemNavigation>
    </ContainerNavigation>
  );
};
