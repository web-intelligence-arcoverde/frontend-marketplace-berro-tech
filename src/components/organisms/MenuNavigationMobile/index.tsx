import React from 'react';
import { ButtonLink } from '@/components/atoms';
import { useAppSelector } from '@/hooks/useSelectorHook';
import { MockNavigation } from '@/mock';
import Link from 'next/link';
import router from 'next/router';
import { CardButtons, CardNavigation, ContainerMenu } from './style';

export const MenuNavigationMobile = () => {
  const token = useAppSelector((state) => state.auth.token);
  return (
    <ContainerMenu>
      <CardNavigation>
        {MockNavigation.map((nav, index) => (
          <Link
            key={index}
            id={nav.link === router.asPath ? 'active' : ''}
            href={nav.link}
          >
            {nav.name}
          </Link>
        ))}
      </CardNavigation>
      {token ? (
        <CardButtons>
          <ButtonLink link='#'>Sair</ButtonLink>
        </CardButtons>
      ) : (
        <CardButtons>
          <ButtonLink id='enter' link='/entrar'>
            Entrar
          </ButtonLink>
          <ButtonLink link='/criar-conta'>Criar conta</ButtonLink>
        </CardButtons>
      )}
    </ContainerMenu>
  );
};
