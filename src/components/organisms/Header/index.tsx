'use client'

import React from 'react';
import { ContainerHeader, MainHeader } from './style';
import { HeaderLogoContainer } from '@/components/molecules/HeaderLogoContainer/HeaderLogoContainer';
import { HeaderNavigation } from '../HeaderNavigation/HeaderNavigation';
import { usePathname } from 'next/navigation'

export const Header = () => {

  const router = usePathname();

  const isSignInPage = router === '/entrar'
  const isRecoveryAccountPage = router === '/recuperar-senha'
  const isSignUp = router === '/criar-conta'

  const hiddenHeader = isSignInPage || isRecoveryAccountPage || isSignUp

  if (hiddenHeader) {
    return
  }

  return (
    <ContainerHeader>
      <MainHeader>
        <HeaderLogoContainer />
        <HeaderNavigation />
      </MainHeader>
    </ContainerHeader>
  );
};
