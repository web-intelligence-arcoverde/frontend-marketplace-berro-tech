import {ICONS} from '@/assets';
import {
  Button,
  ButtonLink,
  Input,
  LayoutInit,
  MiniContainer,
  VerificationCode,
  AuthPublicRouter,
  SendEmailRecoveryAccount,
} from '@/components';
import {CardRecovery} from '@/style/recovery-password';
import Image from 'next/image';

import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {ErrorMessage} from '@/locale';
import {useAppDispatch, useAppSelector} from '@/hooks/useSelectorHook';
import {recoveryAccountSendEmailRequest} from '@/store/reducer/auth/actions';
import {setStepRecoveryAccount} from '@/store/reducer/step/actions';
import {useChronometerHook} from '@/hooks';

const schema = yup
  .object({
    email: yup
      .string()
      .required(ErrorMessage['email-required'])
      .email(ErrorMessage['email-valid']),
  })
  .required();

const RecoveryPassword = () => {
  const {recoveryEmail} = useAppSelector((state) => state.auth);

  const {recovery_account_step} = useAppSelector((state) => state.step);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
    },
  });

  const {chronometer, handleStart} = useChronometerHook();

  const dispatch = useAppDispatch();

  const handleSubmitEmail = (data: any) => {
    dispatch(recoveryAccountSendEmailRequest({email: data}));
  };

  const resendEmailRecoveryAccount = () => {
    dispatch(recoveryAccountSendEmailRequest({email: recoveryEmail}));
    handleStart();
  };

  console.log(recoveryEmail);

  return (
    <AuthPublicRouter>
      <LayoutInit>
        <MiniContainer
          title='Esqueci minha senha'
          subTitle='Siga os passos abaixo para recuperar'
          lastButtonLink='dsddsdsdsdsd'
        >
          <CardRecovery>
            <ButtonLink
              id='back'
              link={recovery_account_step === 0 ? 'entrar' : 'recuperar-senha'}
            >
              <Image
                src={ICONS.Up}
                alt='voltar'
                onClick={() =>
                  recovery_account_step === 1 &&
                  dispatch(setStepRecoveryAccount(0))
                }
              />
              Voltar
            </ButtonLink>
            {recovery_account_step === 0 ? (
              <SendEmailRecoveryAccount />
            ) : (
              <>
                <h4>Verifique o código que enviamos pro seu email:</h4>
                <h6>{recoveryEmail?.email}</h6>
                <VerificationCode />
                <Button onClick={() => {}}>Confirmar</Button>
                {chronometer === '00:00' ? (
                  <Button
                    className='resend'
                    onClick={() => resendEmailRecoveryAccount()}
                  >
                    Reenviar código
                  </Button>
                ) : (
                  <Button className='resend cursor' onClick={() => {}} disabled>
                    {chronometer}
                  </Button>
                )}
              </>
            )}
          </CardRecovery>
        </MiniContainer>
      </LayoutInit>
    </AuthPublicRouter>
  );
};

export default RecoveryPassword;
