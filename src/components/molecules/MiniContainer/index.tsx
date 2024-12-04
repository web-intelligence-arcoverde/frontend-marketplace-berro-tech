/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';
import { ReactNode } from 'react';
import { CardButton, Container, Header, Row, Texts, CardChildren } from './style';
import { ICONS } from '@/assets';
import { ButtonLink } from '@/components';
import React from 'react';

interface MiniContainerProps {
  title: string;
  subTitle: string;
  children: ReactNode;
  lastButton?: string;
  lastButtonLink?: string | any;
  loginWithEmail?: boolean;
}

export const MiniContainer = ({
  title,
  subTitle,
  children,
  lastButton,
  lastButtonLink,
  loginWithEmail,
}: MiniContainerProps) => {
  return (
    <Container>
      <Header>
        <Texts>
          <h4>{title}</h4>
          <h5>{subTitle}</h5>
        </Texts>
        <Image src={ICONS.Hands} alt='icone boas vindas' />
      </Header>
      <Row />
      <CardChildren>{children}</CardChildren>
      {lastButton && (
        <>
          <Row />
          <CardButton>
            <ButtonLink link={lastButtonLink}>
              {!loginWithEmail && (
                <Image src={ICONS.User} alt='icone do usuário' />
              )}
              {lastButton}
            </ButtonLink>
          </CardButton>
        </>
      )}
    </Container>
  );
};
