import { ICONS } from '@/assets';
import {
  Button,
  Input,
  LayoutInit,
  MiniContainer,
  AuthPublicRouter,
} from '@/components';
import Image from 'next/image';
import { useState } from 'react';
import { FormLogin, LostPassword } from '@/style/entrar-style';
import { useHookFormSignInEmail } from '@/hooks/useFormSignEmail';
import { SignInInputs } from '@/mock/Inputs';
import { useAppDispatch } from '@/hooks/useSelectorHook';

const SignIn = () => {
  const [loginWithEmail, setLoginWithEmail] = useState(false);
  const { control, errors, onSubmit } = useHookFormSignInEmail();

  return (
    <AuthPublicRouter>
      <LayoutInit>
        <MiniContainer
          loginWithEmail={loginWithEmail}
          title='Bem-vindo de volta '
          subTitle='Escolha como entrar'
          lastButton='Criar conta'
          lastButtonLink='criar-conta'
        >
          {loginWithEmail ? (
            <FormLogin onSubmit={onSubmit}>
              {SignInInputs.map((input, index) => (
                <Input
                  key={index}
                  nameLabel={input.label}
                  control={control}
                  //@ts-ignore
                  errors={errors[input.name]?.message}
                  {...input}
                />
              ))}
              <LostPassword href='/recuperar-senha'>
                Esqueci minha senha
              </LostPassword>
              <Button type='submit'>Entrar</Button>
            </FormLogin>
          ) : (
            <FormLogin>
              <Button
                onClick={() => {
                  setLoginWithEmail(true);
                }}
              >
                <Image src={ICONS.Email} alt='icone de email' />
                Entrar com Email
              </Button>
            </FormLogin>
          )}
        </MiniContainer>
      </LayoutInit>
    </AuthPublicRouter>
  );
};

export default SignIn;
