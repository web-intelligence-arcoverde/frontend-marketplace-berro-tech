import React from 'react';
import { useRouter } from 'next/router';

import { ContainerNavigation, ItemNavigation, Row } from './style';

import Link from 'next/link';

export const HeaderMenuNavigation = () => {
  const router = useRouter();

  const optionInit = router.asPath === '/';
  const optionBussiness = router.asPath === '/negocios';

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
