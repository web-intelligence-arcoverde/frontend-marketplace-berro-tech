'use client'

/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';
import { Card, CattleCard, Flex, CattleInfoContainer } from './style';
import { CardNameLocation } from '@/components';
import { useRouter } from 'next/router';
import React from 'react';
export const ProductCard = ({
  name,
  breed,
  maxWidth,
  width,
  minWidth,
  widthTablet,
  id,
  documents,
  ageCategory,
  gender,
  business,
  address,
  classification,
}: any) => {
  const router = useRouter();

  const handleRedirect = () => {
    if (router.pathname === '/minhas-publicacoes') {
      router.replace({ pathname: `/minhas-publicacoes/produto/${id}` });
    } else {
      router.replace({ pathname: `/negocios/produto/${id}` });
    }
  };

  return (
    <Card
      widthTablet={widthTablet}
      minWidth={minWidth}
      width={width}
      maxWidth={maxWidth}
      onClick={handleRedirect}
    >
      {documents?.length > 0 && (
        <Image
          width={500}
          height={500}
          src={documents[0].url}
          alt={`foto de um ${breed?.name}`}
        />
      )}
      <Flex>
        <p>{breed?.name}</p>
        <h6>
          {business?.amount}
          <span>{business?.amount > 1 ? ' restantes' : ' restante'}</span>
        </h6>
      </Flex>

      <CardNameLocation
        name={name}
        city={address?.city}
        state={address?.state}
      />

      <CattleInfoContainer>
        <CattleCard>
          <h5>Sexo</h5>
          <h6>{gender}</h6>
        </CattleCard>
        <CattleCard>
          <h5>Idade</h5>
          <h6>{ageCategory?.name}</h6>
        </CattleCard>
        <CattleCard>
          <h5>Classificado</h5>
          <h6>{classification?.name}</h6>
        </CattleCard>
      </CattleInfoContainer>
    </Card>
  );
};
