import { useAppSelector } from '@/hooks/useSelectorHook';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

interface IAuth {
  children: React.ReactNode;
}

export const AuthPrivateRouter = ({ children }: IAuth) => {
  const { token } = useAppSelector((state) => state.auth);

  const path = useRouter();

  const auth = isAuthNotAuth(!!token, path.pathname);

  useEffect(() => {
    if (auth) {
      window.location.replace('/');
    }
  }, []);

  if (auth) {
    return <></>;
  } else {
    return <>{children}</>;
  }
};

function isAuthNotAuth(token: boolean, pathname: string) {
  const isNotAuthSignIn = !token && pathname === '/minhas-publicacoes';

  return isNotAuthSignIn;
}
