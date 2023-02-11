import React from 'react'
import { Container, DescriptionContainer, StampContainer, LinkContainer } from './style'
import Image from "next/image"
import { ICONS } from '@/assets'

export const SecuritySection = () => {
  return (
    <Container>
      <DescriptionContainer>
        <p>Prezamos pela facilidade e segurança na nossa plataforma, acreditamos que com informações claras e uma comunicação rápida, qualquer negócio pode se tornar um bom negócio</p>
        <h2>Com a gente, você pode comprar e vender de forma segura e sem burocracia</h2>
      </DescriptionContainer>
      <StampContainer>
        <figure>
          <Image src={ICONS.SecurityShield} alt='iconde de escudo' />
        </figure>
        <LinkContainer>
          <h6>Quero vender na BerroTech</h6>
          <Image src={ICONS.ArrowDown} alt='seta para direita' />
        </LinkContainer>
      </StampContainer>
    </Container>
  )
}
