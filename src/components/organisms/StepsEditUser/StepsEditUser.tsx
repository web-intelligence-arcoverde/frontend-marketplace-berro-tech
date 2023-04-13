import {
  ContainerForm,
  FirstColumn,
  SecondColumn,
  AboutBussines,
  NextButtonContainer,
  NextButton,
} from './style';
import {EditAccountImage, EditAccountInfo} from '../../';

import {useForm} from 'react-hook-form';
import {useAppDispatch, useAppSelector} from '@/hooks/useSelectorHook';

import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {ErrorMessage} from '@/locale';
import {userEditBasicInformationRequest} from '@/store/reducer/auth/actions';
import {showModalEditUser} from '@/store/reducer/user/actions';

const schema = yup.object({
  name: yup
    .string()
    .min(8, ErrorMessage['name-min'])
    .required(ErrorMessage['password-required']),
  email: yup
    .string()
    .min(8, ErrorMessage['name-min'])
    .required(ErrorMessage['password-required']),
});

export const EditUserBasicInformations = () => {
  const {
    user: {name, email, contacts},
  } = useAppSelector((state) => state.auth);

  let phone = contacts.length > 0 ? contacts[0].phone_number : '';

  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    //@ts-ignore
    resolver: yupResolver(schema),
    defaultValues: {
      name,
      email,
      phone,
    },
  });
  const onSubmit = (data: any) => {
    const formData = new FormData();

    const inputFile = document.getElementById('fileInput') as HTMLInputElement;

    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone', data.phone);

    if (!!inputFile?.files?.item(0)) {
      formData.append('avatar_url', inputFile?.files?.item(0) as File);
    }

    dispatch(userEditBasicInformationRequest(formData));
    dispatch(showModalEditUser({data, step: 0}));
  };
  return (
    <ContainerForm onSubmit={handleSubmit(onSubmit)}>
      <FirstColumn>
        <EditAccountInfo control={control} errors={errors} />
      </FirstColumn>
      <SecondColumn>
        <AboutBussines>
          <EditAccountImage />
        </AboutBussines>
        <NextButtonContainer>
          <NextButton type='submit'>Salvar alterações</NextButton>
        </NextButtonContainer>
      </SecondColumn>
    </ContainerForm>
  );
};
