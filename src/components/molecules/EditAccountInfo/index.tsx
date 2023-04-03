import { FloatingLabelInput, FloatingLabelRadio, FloatingLabelTextarea } from '@/components'
import { TypeAnimal,Ovino,Caprino } from '@/mock'
import React, { useState } from 'react'



export const EditAccountInfo = () => {
  const [animalOption, setAnimalOption] = useState('')

  return (
    <div>
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
          </div>
  )
}
