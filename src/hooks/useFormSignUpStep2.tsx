import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ErrorMessage } from '../locale';
import { useAppDispatch } from './useSelectorHook';
import { addPassword } from '@/store/reducer/user/actions';
import { IRegisterUserProps } from '@/store/reducer/user/types';
import { signUpEmailRequest } from '@/store/reducer/auth/actions';

const schema = yup
  .object({
    password: yup
      .string()
      .required(ErrorMessage['password-required'])
      .min(8, ErrorMessage['password-min']),

    confirmationPassword: yup
      .string()
      .required(ErrorMessage['confirmation-password-required'])
      .min(8, ErrorMessage['password-min'])
      .oneOf(
        [yup.ref('password')],
        ErrorMessage['confirmation-password-equal-password'],
      ),
  })
  .required();

export const useHookFormSignUp1 = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });


  const dispatch = useAppDispatch();
  const onSubmit = handleSubmit((data: IRegisterUserProps) => {
    dispatch(addPassword(data));
    dispatch(signUpEmailRequest());
  });

  return { onSubmit, control, errors };
};
