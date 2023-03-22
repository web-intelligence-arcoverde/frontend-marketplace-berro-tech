import { ICONS } from "@/assets";
import {
  Button,
  ButtonAuthentication,
  Input,
  LayoutInit,
  MiniContainer,
} from "@/components";
import Image from "next/image";

import { useState } from "react";
import { FormLogin, LostPassword } from "@/style/entrar-style";
import { useHookFormSignInEmail } from "@/hooks/useFormSignEmail";
import { SignInInputs } from "@/mock/Inputs";

const SignIn = () => {
  const [loginWithEmail, setLoginWithEmail] = useState(false);

  const { control, errors, onSubmit } = useHookFormSignInEmail();
  return (
    <LayoutInit>
      <MiniContainer
        loginWithEmail={loginWithEmail}
        title="Bem-vindo de volta "
        subTitle="Escolha como entrar"
        lastButton="Criar conta"
        lastButtonLink="criar-conta"
      >
        {loginWithEmail ? (
          <FormLogin onSubmit={onSubmit}>
            {SignInInputs.map((input) => (
              <Input
                nameLabel={input.label}
                control={control}
                //@ts-ignore
                errors={errors[input.name]?.message}
                {...input}
              />
            ))}

            <LostPassword href="recuperar-senha">
              Esqueci minha senha
            </LostPassword>
            <Button type="submit">Entrar</Button>
          </FormLogin>
        ) : (
          <FormLogin>
            <Button
              onClick={() => {
                setLoginWithEmail(true);
              }}
            >
              <Image src={ICONS.Email} alt="icone de email" />
              Entrar com Email
            </Button>
            <ButtonAuthentication>
              <Image src={ICONS.Google} alt="icone de google" /> Entrar com
              Google
            </ButtonAuthentication>
            <ButtonAuthentication>
              <Image src={ICONS.Facebook} alt="icone de facebook" />
              Entrar com Facebook
            </ButtonAuthentication>
          </FormLogin>
        )}
      </MiniContainer>
    </LayoutInit>
  );
};

export default SignIn;
