import { Button } from "@/components";
import Input from "@/components/atoms/Input";
import { registerUser } from "@/mock";
import { ChangeEvent, FormEvent, useState } from "react";

const SignUp = () => {
  const [form, setForm] = useState(registerUser);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setForm(registerUser);
    console.log("Formulário enviado", form);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "500px",
        margin: "auto",
        height: "70vh",
      }}
    >
      <form
        onSubmit={submitForm}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "500px",
          margin: "auto",
          gap: "5px",
        }}
      >
        <h2>Cadastrar</h2>
        <Input
          name="email"
          type="email"
          placeholder="Digite seu E-mail"
          required
          value={form.email}
          onChange={handleChange}
        />
        <Input
          name="fullName"
          type="text"
          placeholder="Digite seu nome"
          value={form.fullName}
          onChange={handleChange}
        />
        <Input
          name="cep"
          type="number"
          placeholder="CEP"
          value={form.cep}
          onChange={handleChange}
        />

        <div style={{ display: "flex", gap: "5px" }}>
          <Input
            name="city"
            type="text"
            placeholder="Cidade"
            value={form.city}
            onChange={handleChange}
          />
          <Input
            width="150px"
            name="state"
            type="text"
            placeholder="Estado"
            value={form.state}
            onChange={handleChange}
          />
        </div>
        <div style={{ display: "flex", gap: "5px" }}>
          <Input
            name="address"
            type="text"
            placeholder="Endereço "
            value={form.address}
            onChange={handleChange}
          />
          <Input
            width="150px"
            name="numberAddress"
            type="text"
            placeholder="Número "
            value={form.numberAddress}
            onChange={handleChange}
          />
        </div>
        <Input
          name="district"
          type="text"
          placeholder="Bairro "
          value={form.district}
          onChange={handleChange}
        />
        <Input
          name="phone"
          type="tel"
          placeholder="Ex: (87) 991054786 "
          value={form.phone}
          onChange={handleChange}
        />
        <Input
          name="password"
          type="password"
          placeholder="Digite sua senha"
          value={form.password}
          onChange={handleChange}
        />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirme sua senha "
          value={form.confirmPassword}
          onChange={handleChange}
        />

        <Button onClick={console.log}>Cadastrar</Button>
      </form>
    </div>
  );
};

export default SignUp;
