import { FloatingLabelInput } from '@/components'
import React from 'react'
import { Container } from './style'



export const EditAccountInfo = () => {

  return (
    <Container>
      <FloatingLabelInput
        required
        type="text"
        id="accountName"
        name="accountName"
        placeholder="Nome"
      />
      <FloatingLabelInput
        required
        type="text"
        id="email"
        name="email"
        placeholder="E-mail"
      />
      <FloatingLabelInput
        required
        type="tel"
        maxLength={11}
        id="cellphone"
        name="cellphone"
        placeholder="Telefone"
      />
    </Container>
  )
}
