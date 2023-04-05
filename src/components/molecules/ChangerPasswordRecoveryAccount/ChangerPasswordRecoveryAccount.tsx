import {Input, Button} from '../..';

import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {ErrorMessage} from '@/locale';
import {useAppDispatch, useAppSelector} from '@/hooks/useSelectorHook';

const schema = yup.object({
  password: yup
    .string()
    .min(8, ErrorMessage['name-min'])
    .required(ErrorMessage['password-required']),
  confirmationPassword: yup
    .string()
    .min(8, ErrorMessage['name-min'])
    .required(ErrorMessage['confirmation-password-equal-password'])
    .oneOf([yup.ref('password')], 'Passwords does not match'),
});

import {ContainerForm} from './style';
import {changerPasswordRequest} from '@/store/reducer/auth/actions';

export const ChangerPasswordRecoveryAccount = () => {
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      password: '',
      confirmationPassword: '',
    },
  });

  const {codeVerificationCode} = useAppSelector((state) => state.auth);

  const handleSubmitEmail = (data: any) => {
    dispatch(
      changerPasswordRequest({
        token: codeVerificationCode,
        ...data,
      }),
    );
  };

  return (
    <ContainerForm onSubmit={handleSubmit((data) => handleSubmitEmail(data))}>
      <Input
        nameLabel='Senha'
        name='password'
        type='password'
        placeholder='Senha'
        control={control}
        errors={errors?.password?.message}
      />
      <Input
        nameLabel='Confirmação de senha'
        name='confirmationPassword'
        type='password'
        placeholder='Confirmação'
        control={control}
        errors={errors?.confirmationPassword?.message}
      />
      <Button type='submit'>Alterar senha</Button>
    </ContainerForm>
  );
};
