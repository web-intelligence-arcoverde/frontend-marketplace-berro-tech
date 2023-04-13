import {FloatingLabelInput} from '@/components';
import {useAppDispatch, useAppSelector} from '@/hooks/useSelectorHook';
import {
  Container,
  ContainerInputs,
  NextButton,
  NextButtonContainer,
  ContainerTitle,
} from './style';
import {userEditLocationInformationRequest} from '@/store/reducer/auth/actions';
import {IEditUserLocationProps} from '@/store/reducer/auth/types';
import {showModalEditUser} from '@/store/reducer/user/actions';

export const EditAccountLocation = () => {
  const {
    user: {addresses},
  } = useAppSelector((state) => state.auth);

  let address = addresses.length > 0 && {
    state: addresses[0].state,
    city: addresses[0].city,
  };

  const dispatch = useAppDispatch();
  const formData = {} as IEditUserLocationProps;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const inputs = form.querySelectorAll<HTMLInputElement>('[name]');

    inputs.forEach((input) => {
      const {name, value} = input;
      formData[name] = value;
    });

    dispatch(userEditLocationInformationRequest(formData));
    dispatch(showModalEditUser({formData, step: 0}));
  };

  return (
    <Container onSubmit={handleSubmit}>
      <ContainerTitle>
        <h2>Alterar endereço</h2>
        <ContainerInputs>
          <FloatingLabelInput
            type='text'
            id='state'
            isWhite
            name='state'
            placeholder='Estado'
            //@ts-ignore
            value={address.state}
          />
          <FloatingLabelInput
            type='text'
            id='city'
            isWhite
            name='city'
            placeholder='Cidade'
            //@ts-ignore
            value={address.city}
          />
        </ContainerInputs>
      </ContainerTitle>
      <NextButtonContainer>
        <NextButton type='submit'>Confirmar alteração</NextButton>
      </NextButtonContainer>
    </Container>
  );
};
