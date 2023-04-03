import {useAppSelector} from '@/hooks/useSelectorHook';
import {useRouter} from 'next/router';
import React, {useEffect} from 'react';

interface IAuth {
  children: React.ReactNode;
}

export const AuthPublicRouter = ({children}: IAuth) => {
  const {token} = useAppSelector((state) => state.auth);

  const path = useRouter();

  let auth = isAuthNotAuth(!!token, path.pathname);

  useEffect(() => {
    if (auth) {
      window.location.replace('/minhas-publicacoes');
    }
  }, []);

  if (auth) {
    return <></>;
  } else {
    return <>{children}</>;
  }
};

function isAuthNotAuth(token: boolean, pathname: string) {
  const isNotAuthSignIn = token && pathname === '/entrar';
  const isNotAuthRecoveryAccount = token && pathname === '/recuperar-conta';
  const isNotAuthCreateAccount = token && pathname === '/criar-conta';

  return isNotAuthSignIn || isNotAuthRecoveryAccount || isNotAuthCreateAccount;
}

// ROTAS
