import { ICONS } from '@/assets'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import Image from "next/image"
import { Container, InputSearchBar, InputContainer, CheckboxContainer } from "./style"
import { Checkbox } from '@/components/atoms'


export const BussinessFilter = () => {

  const [form, setForm] = useState({
    mainSearch: '',
  });
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setForm({ mainSearch: '' });
    console.log('Formulário enviado', form);
  };


  return (
    <Container>
      <InputContainer onSubmit={submitForm}>
        <Image src={ICONS.Search} alt="Icone de pesquisa" />
        <InputSearchBar
          name={"mainSearch"}
          type={"text"}
          placeholder="Buscar"
          onChange={handleChange}
        />
      </InputContainer>
      <CheckboxContainer>
        <Checkbox name='arcoverde-pe' />
      </CheckboxContainer>
    </Container>
  )
}
