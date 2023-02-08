import { Button, LayoutInit, MiniContainer } from "@/components";
import InputUser from "@/components/atoms/Input/InputUser";

import { ChangeEvent, FormEvent, useState } from "react";
import { FormLogin, LostPassword } from "./style";

const SignIn = () => {
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
        title="Bem-vindo de volta "
        subTitle="Escolha como entrar"
        lastButton="Criar conta"
        lastButtonLink="criar-conta"
      >
        <FormLogin onSubmit={submitForm}>
          <InputUser
            name="email"
            type="email"
            placeholder="E-mail"
            required
            value={form.email}
            onChange={handleChange}
          />
          <InputUser
            name="password"
            type="password"
            placeholder="Senha"
            value={form.password}
            onChange={handleChange}
          />
          <LostPassword href="">Esqueci minha senha</LostPassword>
          <Button onClick={console.log}>Entrar</Button>
        </FormLogin>
      </MiniContainer>
    </LayoutInit>
  );
};

export default SignIn;
