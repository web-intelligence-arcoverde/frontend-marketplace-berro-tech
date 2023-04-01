import { MapLocation } from '@/assets/icons/map-location'
import React from 'react'
import { CardInfo, Container, CardRegion, RegionContainer } from './style'
import { regionMock } from '@/mock'


export const CountryRegion = () => {
  return (
    <Container>
      <CardInfo>
        <h2>Nós temos compradores e vendores ativos nas 5 regiões do Brasil</h2>
        <span>
          <p>Encontre</p>
          <p>Consulte</p>
          <p>Compre</p>
          <p>Venda</p>
        </span>
      </CardInfo>
      <RegionContainer>
        {regionMock.map((item) => (
          <CardRegion iconColor={item.colorIcon} backgroundColor={item.colorBackground} key={item.region}>
            <figure>
              <MapLocation />
            </figure>
            <div>
              <h5>{item.region}</h5>
              <p>{item.description}</p>
            </div>
          </CardRegion>
        ))
        }
      </RegionContainer>
    </Container>
  )
}
