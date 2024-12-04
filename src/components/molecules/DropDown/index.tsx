import { ICONS } from '@/assets';
import { useAppDispatch } from '@/hooks/useSelectorHook';
import { signOutRequest } from '@/store/reducer/auth/actions';
import Image from 'next/image';
import Link from 'next/link';
import { StyleDropDown } from './style';
import React from "react";
export const DropDown = () => {
  const dispatch = useAppDispatch();

  return (
    <StyleDropDown>
      <li>
        <Image src={ICONS.MyPulblication} alt='minhas pulblicações' />
        <Link href='/minhas-publicacoes' replace>
          Minhas publicações
        </Link>
      </li>
      <li onClick={() => dispatch(signOutRequest())}>
        <Image src={ICONS.Exit} alt='minhas pulblicações' />
        <span>Sair</span>
      </li>
    </StyleDropDown>
  );
};
