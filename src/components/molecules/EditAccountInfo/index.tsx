import {Button} from '@/components';
import MaskedInput from 'react-input-mask';
import {ButtonContainer, CardInputUser, Container, TextLabel} from './style';

import {useAppDispatch, useAppSelector} from '@/hooks/useSelectorHook';
import {userLoggedDeleteRequest} from '@/store/reducer/auth/actions';

export const EditAccountInfo = () => {
  const {user} = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();

  return (
    <Container>
      <h3>Suas Informações</h3>
      <CardInputUser>
        <div>
          <TextLabel>Nome</TextLabel>
          <MaskedInput mask={''} type={'text'} placeholder={''} required />
        </div>
      </CardInputUser>
      <CardInputUser>
        <div>
          <TextLabel>E-mail</TextLabel>
          <MaskedInput
            required
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
            required
            mask={'(99) 99999-9999'}
            name='phone'
            type={'tel'}
            placeholder={'(_ _) _ _ _ _ _-_ _ _ _'}
          />
        </div>
      </CardInputUser>
      <ButtonContainer>
        <Button onClick={() => dispatch(userLoggedDeleteRequest())}>
          Excluir minha conta
        </Button>
      </ButtonContainer>
    </Container>
  );
};
