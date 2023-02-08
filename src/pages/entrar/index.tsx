import { ICONS } from "@/assets";
import {
  Button,
  ButtonAuthentication,
  InputUser,
  LayoutInit,
  MiniContainer,
} from "@/components";
import Image from "next/image";

import { ChangeEvent, FormEvent, useState } from "react";
import { FormLogin, LostPassword } from "./style";

const SignIn = () => {
  const [loginWithEmail, setLoginWithEmail] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setForm({ email: "", password: "" });
    console.log("Formulário enviado", form);
  };

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
          <FormLogin onSubmit={submitForm}>
            <InputUser
              nameLabel="E-mail"
              name="email"
              type="email"
              placeholder="E-mail"
              required
              value={form.email}
              onChange={handleChange}
            />
            <InputUser
              nameLabel="Senha"
              name="senha"
              type="password"
              placeholder="Senha"
              value={form.password}
              onChange={handleChange}
            />
            <LostPassword href="">Esqueci minha senha</LostPassword>
            <Button onClick={console.log}>Entrar</Button>
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
