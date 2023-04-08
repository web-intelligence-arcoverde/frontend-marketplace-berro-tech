import {Button} from '@/components';
import {useAppSelector} from '@/hooks/useSelectorHook';
import React from 'react';
import MaskedInput from 'react-input-mask';
import {ButtonContainer, CardInputUser, Container, TextLabel} from './style';

export const EditAccountInfo = () => {
  const {user} = useAppSelector((state) => state.auth);

  return (
    <Container>
      <h3>Suas Informações</h3>
      <CardInputUser>
        <div>
          <TextLabel>Nome</TextLabel>
          <MaskedInput mask={''} name='name' type={'text'} placeholder={''} />
        </div>
      </CardInputUser>
      <CardInputUser>
        <div>
          <TextLabel>E-mail</TextLabel>
          <MaskedInput
            mask={''}
            name='email'
            type={'email'}
            placeholder={'****@gmail.com'}
          />
        </div>
      </CardInputUser>
      <CardInputUser>
        <div>
          <TextLabel>Telefone</TextLabel>
          <MaskedInput
            mask={'(99) 99999-9999'}
            name='phone'
            type={'tel'}
            placeholder={'(_ _) _ _ _ _ _-_ _ _ _'}
          />
        </div>
      </CardInputUser>
      <ButtonContainer>
        <Button>Excluir minha conta</Button>
      </ButtonContainer>
    </Container>
  );
};
