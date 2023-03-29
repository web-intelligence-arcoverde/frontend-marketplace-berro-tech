import {ICONS} from '@/assets';
import {
  Button,
  ButtonLink,
  Input,
  LayoutInit,
  MiniContainer,
  VerificationCode,
} from '@/components';
import {CardRecovery} from '@/style/recovery-password';
import Image from 'next/image';
import {ChangeEvent, useEffect, useState} from 'react';

import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {ErrorMessage} from '@/locale';

const schema = yup
  .object({
    email: yup
      .string()
      .required(ErrorMessage['email-required'])
      .email(ErrorMessage['email-valid']),
  })
  .required();

const RecoveryPassword = () => {
  const [email, setEmail] = useState('');
  const [step, SetStep] = useState(0);
  const [countdown, setCountdown] = useState(59);

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

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;
    if (countdown > 0 && step > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [countdown, step]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {value} = event.target;
    setEmail(value);
  };

  const handleStep = () => {
    SetStep(1);
  };

  const handleResend = () => {
    setCountdown(59);
  };

  return (
    <LayoutInit>
      <MiniContainer
        title='Esqueci minha senha'
        subTitle='Siga os passos abaixo para recuperar'
        lastButtonLink='dsddsdsdsdsd'
      >
        <CardRecovery>
          <ButtonLink id='back' link={'entrar'}>
            <Image src={ICONS.Up} alt='voltar' />
            Voltar
          </ButtonLink>
          {!step ? (
            <>
              <Input
                nameLabel='Email'
                name='email'
                type='email'
                placeholder='Email da sua conta'
                control={control}
                errors={errors}
              />
              <Button type='submit' onClick={handleStep}>
                Recuperar senha
              </Button>
            </>
          ) : (
            <>
              <h4>Verifique o código que enviamos pro seu email:</h4>
              <h6>{email}</h6>
              <VerificationCode />
              <Button onClick={() => {}}>Confirmar</Button>
              {countdown === 0 ? (
                <Button className='resend' onClick={handleResend}>
                  Reenviar código
                </Button>
              ) : (
                <Button className='resend cursor' onClick={() => {}}>
                  Reenviar código (00:{countdown})
                </Button>
              )}
            </>
          )}
        </CardRecovery>
      </MiniContainer>
    </LayoutInit>
  );
};

export default RecoveryPassword;
