import {FloatingLabelInput} from '@/components';
import React, {useState} from 'react';
import {
  Container,
  ContainerInputs,
  ContainerTitle,
  NextButton,
  NextButtonContainer,
} from './style';
import {useAppDispatch} from '@/hooks/useSelectorHook';
import {userEditPasswordInformationRequest} from '@/store/reducer/auth/actions';
import {IEditUserPasswordProps} from '@/store/reducer/auth/types';
import {showModalEditUser} from '@/store/reducer/user/actions';

export const EditAccountPassword = () => {
  const dispatch = useAppDispatch();
  const formData: IEditUserPasswordProps = {};

  const [error, setError] = useState(false);
  const [messageErro, setMessageError] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const inputs = form.querySelectorAll<HTMLInputElement>('[name]');

    inputs.forEach((input) => {
      const {name, value} = input;
      formData[name] = value;
    });

    if (formData.password !== formData.confirmationPassword) {
      setError(true);
      setMessageError('A senha e a confirmação de senha não são iguais');
    } else {
      setError(false);
      setMessageError('');
      dispatch(userEditPasswordInformationRequest(formData));
      dispatch(showModalEditUser({formData, step: 0}));
    }
  };

  return (
    <Container onSubmit={handleSubmit}>
      <ContainerTitle>
        <h2>Alterar Senha</h2>
        <ContainerInputs>
          <FloatingLabelInput
            type='password'
            id='password'
            isWhite
            isPassword
            name='currentPassword'
            required
            error={error}
            errorMessage={messageErro}
            placeholder='Senha atual'
          />
          <FloatingLabelInput
            type='password'
            id='confirmationPassword'
            isWhite
            isPassword
            required
            name='newPassword'
            placeholder='Nova senha'
            error={error}
            errorMessage={messageErro}
          />
        </ContainerInputs>
      </ContainerTitle>
      <NextButtonContainer>
        <NextButton type='submit'>Confirmar alteração</NextButton>
      </NextButtonContainer>
    </Container>
  );
};
