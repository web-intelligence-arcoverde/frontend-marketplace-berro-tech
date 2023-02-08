import { Button, LayoutInit, MiniContainer } from "@/components";
import InputUser from "@/components/atoms/Input/InputUser";
import { Input } from "@/components/atoms/Input/style";

import { ChangeEvent, FormEvent, useState } from "react";

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
      >
        <form onSubmit={submitForm}>
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
          <Button onClick={console.log}>Entrar</Button>
        </form>
      </MiniContainer>
    </LayoutInit>
  );
};

export default SignIn;
