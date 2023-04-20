import {Button} from '@/components';
import MaskedInput from 'react-input-mask';
import {ButtonContainer, CardInputUser, Container, TextLabel} from './style';

import {useAppDispatch} from '@/hooks/useSelectorHook';
import {userLoggedDeleteRequest} from '@/store/reducer/auth/actions';

import {Controller} from 'react-hook-form';

export const EditAccountInfo = ({control, errors}: any) => {
  const dispatch = useAppDispatch();

  return (
    <Container>
      <h3>Suas Informações</h3>
      <CardInputUser>
        <Controller
          name='name'
          control={control}
          render={({field: {ref, ...field}}) => (
            <div>
              <TextLabel>Nome</TextLabel>
              <MaskedInput
                style={{color: '#737185'}}
                onChange={field.onChange}
                defaultValue={field.value}
                mask=''
              />
              {errors.name && (
                <p style={{color: 'red'}}>{errors.name?.message}</p>
              )}
            </div>
          )}
        />
      </CardInputUser>
      <CardInputUser>
        <div>
          <Controller
            name='email'
            control={control}
            render={({field: {ref, ...field}}) => (
              <div>
                <TextLabel>E-mail</TextLabel>
                <MaskedInput
                  style={{color: '#737185'}}
                  onChange={field.onChange}
                  defaultValue={field.value}
                  mask=''
                  type='email'
                />
                {errors.email && (
                  <p style={{color: 'red'}}>{errors.email?.message}</p>
                )}
              </div>
            )}
          />
        </div>
      </CardInputUser>
      <CardInputUser>
        <Controller
          name='phone'
          control={control}
          render={({field: {ref, ...field}}) => (
            <div>
              <TextLabel>Telefone</TextLabel>
              <MaskedInput
                style={{color: '#737185'}}
                onChange={field.onChange}
                defaultValue={field.value}
                mask='(99) 99999-9999'
                type='tel'
              />
              {errors.phone && (
                <p style={{color: 'red'}}>{errors.phone?.message}</p>
              )}
            </div>
          )}
        />
      </CardInputUser>
      <ButtonContainer>
        <Button
          onClick={() => dispatch(userLoggedDeleteRequest())}
          type='button'
        >
          Excluir minha conta
        </Button>
      </ButtonContainer>
    </Container>
  );
};
