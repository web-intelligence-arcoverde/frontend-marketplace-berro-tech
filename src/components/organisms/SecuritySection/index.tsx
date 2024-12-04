import React from 'react';
import {
  Container,
  DescriptionContainer,
  StampContainer,
  LinkContainer,
} from './style';
import Image from 'next/image';
import { ICONS } from '@/assets';
import { useAppSelector } from '@/hooks/useSelectorHook';

export const SecuritySection = () => {
  const token = useAppSelector((state) => state.auth.token);
  return (
    <Container>
      <DescriptionContainer>
        <figure>
          <Image src={ICONS.SecurityShield} alt='iconde de escudo' />
        </figure>
        <p>
          Prezamos pela facilidade e segurança na nossa plataforma, acreditamos
          que com informações claras e uma comunicação rápida, qualquer negócio
          pode se tornar um bom negócio
        </p>
        <h2>
          Com a gente, você pode comprar e vender de forma segura e sem
          burocracia
        </h2>
      </DescriptionContainer>
      <StampContainer>
        <figure>
          <Image src={ICONS.SecurityShield} alt='iconde de escudo' />
        </figure>
        <LinkContainer href={token ? 'minhas-publicacoes' : 'entrar'}>
          <h6>Quero vender na BerroTech</h6>
          <Image src={ICONS.ArrowDown} alt='seta para direita' />
        </LinkContainer>
      </StampContainer>
    </Container>
  );
};
