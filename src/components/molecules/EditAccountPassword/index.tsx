import { FloatingLabelInput } from '@/components'
import React from 'react'
import { Container, ContainerInputs, ContainerTitle, NextButton, NextButtonContainer } from './style';
import { useAppDispatch } from '@/hooks/useSelectorHook';
import { userEditPasswordInformationRequest } from '@/store/reducer/auth/actions';
import { IEditUserPasswordProps } from '@/store/reducer/auth/types';


export const EditAccountPassword = () => {
  const dispatch = useAppDispatch()
  const formData:IEditUserPasswordProps = {}


  const handleSubmit = (event:  React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;;
    const inputs = form.querySelectorAll<HTMLInputElement>('[name]');

    inputs.forEach((input) => {
      const { name, value } = input;
        formData[name] = value;
      });
      dispatch(userEditPasswordInformationRequest(formData))
  };

  return (
    <Container onSubmit={handleSubmit}>
      <ContainerTitle>
        <h2>Alterar Senha</h2>
        <ContainerInputs>
          <FloatingLabelInput
            type="password"
            id="password"
            isWhite
            isPassword
            name="password"
            placeholder="Senha atual"
          />
          <FloatingLabelInput
            type="password"
            id="confirmationPassword"
            isWhite
            isPassword
            name="confirmationPassword"
            placeholder="Nova senha"
          />
        </ContainerInputs>
      </ContainerTitle>
      <NextButtonContainer>
        <NextButton type="submit">Confirmar alteração</NextButton>
      </NextButtonContainer>
    </Container>
  );
};