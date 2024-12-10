import { CardButton, Header, Row, Texts } from "@/app/(auth)/entrar/style"
import { ICONS } from "@/assets"
import React from "react"
import Image from "next/image"
import { ButtonLink } from "@/components/atoms/Button/ButtonLink"

export const ModalAuthenticationOptions = () => {
  return (
    <>
      <Header>
        <Texts>
          <h4>Bem-vindo de volta</h4>
          <h5>Escolha como entrar</h5>
        </Texts>
        <Image src={ICONS.Hands} alt='icone boas vindas' />
      </Header>
      <Row />

      <Row />
      <CardButton>
        <ButtonLink link={'criar-conta'}>
          Criar conta
        </ButtonLink>
      </CardButton>
    </>
  )
}