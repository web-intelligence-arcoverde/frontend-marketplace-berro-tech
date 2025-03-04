'use client'

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouter } from 'next/router';
import Image from 'next/image';
import { ListBreadcumb, ItemBreadcumb } from './style';
import Link from 'next/link';
import { ICONS } from '@/assets';
import React from "react";
export const Breadcrumb = () => {
  const router = useRouter();
  const pathnames = router.pathname.split('/').filter((x: string) => x);

  const { product } = router.query;
  const newArrayPathNames = pathnames.map((item) =>
    item === '[product]' ? product : item,
  );

  return (
    <ListBreadcumb>
      <ItemBreadcumb>
        <Link href='/'>Início</Link>
        <Image src={ICONS.ArrowRight} alt='imagem seta direita' />
      </ItemBreadcumb>
      {newArrayPathNames.length > 1 &&
        newArrayPathNames.map((name: any, key: any) => {
          const goTo = `/${newArrayPathNames.slice(0, key + 1).join('/')}`;
          return (
            <ItemBreadcumb key={goTo}>
              <Link href={goTo}>
                {name === 'minhas-publicacoes' ? 'minhas publicações ' : name}
              </Link>
              <Image src={ICONS.ArrowRight} alt='imagem seta direita' />
            </ItemBreadcumb>
          );
        })}
    </ListBreadcumb>
  );
};
