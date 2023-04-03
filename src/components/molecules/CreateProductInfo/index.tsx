import { FloatingLabelInput, FloatingLabelRadio, FloatingLabelTextarea } from '@/components'
import { TypeAnimal,Ovino,Caprino } from '@/mock'
import React, { useState } from 'react'



export const CreateProductInfo = () => {
  const [animalOption, setAnimalOption] = useState('')

  return (
    <div>
        <FloatingLabelInput
          required
          type="text"
          id="animalName"
          name="animalName"
          placeholder="Nome"
        />
        <FloatingLabelRadio
          required
          setOption={setAnimalOption}
          placeholder={"Animal"}
          name='animal'
          id="animal"
          labels={TypeAnimal}
        />
        <FloatingLabelRadio required disable={!animalOption} placeholder={"Raça"} name={'breed'} id="breed" labels={animalOption === 'Ovino' ? Ovino : Caprino} />
        <FloatingLabelRadio
          required
          placeholder={"Classificação"}
          id="classification"
          name="classification"
          labels={['Genética', 'Reposição']}
        />
        <FloatingLabelRadio
          required
          name="gender"
          placeholder={"Sexo"}
          id="gender"
          labels={['Macho', 'Fêmea']}
        />
        <FloatingLabelRadio
          required
          name="age"
          placeholder={"Idade"}
          id="age"
          labels={['Garrote', 'Novilha','Bezerra']}
        />
        <FloatingLabelInput
          required
          type="text"
          id="Weight"
          name="Weight"
          placeholder="Peso/kg"
        />
        <FloatingLabelInput
          type="date"
          id="birthday"
          name="birthday"
          placeholder="Data de nascimento"
        />
        <FloatingLabelTextarea
          required
          type="text"
          id="description"
          name="description"
          placeholder="Descrição"
        />
    </div>
  )
}
