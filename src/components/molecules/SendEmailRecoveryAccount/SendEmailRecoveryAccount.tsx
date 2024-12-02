import { Input, Button } from '../../';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ErrorMessage } from '@/locale';
import { useAppDispatch } from '@/hooks/useSelectorHook';
import { recoveryAccountSendEmailRequest } from '@/store/reducer/auth/actions';

const schema = yup.object({
  email: yup
    .string()
    .required(ErrorMessage['email-required'])
    .email(ErrorMessage['email-valid']),
});

import { ContainerForm } from './style';

export const SendEmailRecoveryAccount = () => {
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
    },
  });

  const handleSubmitEmail = (data: any) => {
    dispatch(recoveryAccountSendEmailRequest(data));
  };

  return (
    <ContainerForm onSubmit={handleSubmit((data) => handleSubmitEmail(data.email))}>
      <Input
        nameLabel='Email'
        name='email'
        type='email'
        placeholder='Email da sua conta'
        control={control}
        errors={errors?.email?.message}
      />
      <Button type='submit'>Recuperar senha</Button>
    </ContainerForm>
  );
};
