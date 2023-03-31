import {useAppSelector} from '@/hooks/useSelectorHook';
import React, {useEffect} from 'react';

interface IAuth {
  children: React.ReactNode;
}

export const AuthLayout = ({children}: IAuth) => {
  const {token} = useAppSelector((state) => state.user);

  useEffect(() => {
    if (!!token) {
      window.location.replace('/');
    }
  }, [token]);

  return <>{children}</>;
};
