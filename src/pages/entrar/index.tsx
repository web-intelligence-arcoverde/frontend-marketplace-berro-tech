import { Button, LayoutInit } from "@/components";
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
      <form onSubmit={submitForm}>
        <h2>Entrar</h2>
        <Input
          name="email"
          type="email"
          placeholder="E-mail"
          required
          value={form.email}
          onChange={handleChange}
        />
        <Input
          name="password"
          type="password"
          placeholder="Senha"
          value={form.password}
          onChange={handleChange}
        />
        <Button onClick={console.log}>Entrar</Button>
      </form>
    </LayoutInit>
  );
};

export default SignIn;
