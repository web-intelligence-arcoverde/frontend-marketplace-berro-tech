'use client'

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { ErrorMessage } from '../locale';

const schema = yup
  .object({
    email: yup
      .string()
      .required(ErrorMessage['email-required'])
      .email(ErrorMessage['email-valid']),

    password: yup
      .string()
      .required(ErrorMessage['password-required'])
      .min(8, ErrorMessage['password-min']),
  })
  .required();

export const useHookFormSignInEmail = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });


  const onSubmit = handleSubmit((data) => console.log(data));

  return { onSubmit, control, errors };
};
