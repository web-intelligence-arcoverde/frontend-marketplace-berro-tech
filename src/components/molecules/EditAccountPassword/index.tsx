import { FloatingLabelInput } from '@/components'
import React from 'react'
import { Container, ContainerInputs, ContainerTitle, NextButton, NextButtonContainer } from './style';


export const EditAccountPassword = (props: any) => {

  const formData = {} as any


  const handleSubmit = (event:  React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;;
    const inputs = form.querySelectorAll<HTMLInputElement>('[name]');

    inputs.forEach((input) => {
      const { name, value } = input;
        formData[name] = value;
      });
      
      props.clickStep(3)
  };

  return (
    <Container onSubmit={handleSubmit}>
      <ContainerTitle>
        <h2>Alterar Senha</h2>
        <ContainerInputs>
          <FloatingLabelInput
            type="password"
            id="actualPassword"
            isWhite
            isPassword
            name="actualPassword"
            placeholder="Senha atual"
          />
          <FloatingLabelInput
            type="password"
            id="newPassword"
            isWhite
            isPassword
            name="newPassword"
            placeholder="Nova senha"
          />
        </ContainerInputs>
      </ContainerTitle>
      <NextButtonContainer>
        <NextButton type="submit">Próximo</NextButton>
      </NextButtonContainer>
    </Container>
  );
};