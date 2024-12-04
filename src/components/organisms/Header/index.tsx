import { HeaderLogoContainer, HeaderNavigation } from '@/components';
import { useAppDispatch, useAppSelector } from '@/hooks/useSelectorHook';
import { userLoggedInformationRequest } from '@/store/reducer/auth/actions';
import React, { useEffect } from 'react';
import { ContainerHeader, MainHeader } from './style';

export const Header = () => {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (token) {
      dispatch(userLoggedInformationRequest())
    }
  }, []);

  return (
    <ContainerHeader>
      <MainHeader>
        <HeaderLogoContainer />
        <HeaderNavigation />
      </MainHeader>
    </ContainerHeader>
  );
};
