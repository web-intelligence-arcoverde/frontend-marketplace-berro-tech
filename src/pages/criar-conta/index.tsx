import { Button, InputUser, LayoutInit, MiniContainer } from "@/components";
import { ChangeEvent, FormEvent, useState } from "react";
import { emailRegex } from "./regex";
import { CardStep, FormRegister } from "./style";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    repeatPassword: "",
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [disabled, setDisabled] = useState(true);
  const totalStep = 2;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prevForm: any) => ({ ...prevForm, [name]: value }));
    
    if (!emailRegex.test(form.email) || !form.name || !form.phone) {
      return setDisabled(true);
    } else {
      return setDisabled(false);
    }
  };
  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setForm({
      name: "",
      phone: "",
      email: "",
      password: "",
      repeatPassword: "",
    });
    console.log("Formulário enviado", form);
  };

  return (
    <LayoutInit>
      <MiniContainer
        title="Seja bem-vindo"
        subTitle="Preencha os campos para criar sua conta"
        lastButton="Já tenho uma conta"
        lastButtonLink="entrar"
      >
        <FormRegister autoComplete="off" onSubmit={submitForm}>
          {currentStep == 1 && (
            <>
              <CardStep>
                Etapa {currentStep} de {totalStep}
              </CardStep>
              <InputUser
                nameLabel="Nome"
                name="name"
                type="text"
                placeholder="Seu nome completo"
                value={form.name}
                onChange={handleChange}
                required
              />
              <InputUser
                nameLabel="Email"
                name="email"
                type="email"
                placeholder="Seu melhor email"
                required
                value={form.email}
                onChange={handleChange}
              />
              <InputUser
                nameLabel="Telefone"
                name="phone"
                type="tel"
                required
                maxLength={15}
                placeholder="(_ _) _ _ _ _ _-_ _ _ _"
                value={form.phone
                  .replace(/\D/g, "")
                  .replace(/(\d{2})(\d)/, "($1) $2")
                  .replace(/(\d{5})(\d)/, "$1-$2")
                  .replace(/(\d{4})-(\d)(\d{4})/, "$1$2-$3")}
                onChange={handleChange}
              />
              <Button
                disabled={disabled}
                type="button"
                onClick={handleNextStep}
              >
                Próximo
              </Button>
            </>
          )}
          {currentStep == 2 && (
            <>
              <CardStep>
                Etapa {currentStep} de {totalStep}
              </CardStep>
              <InputUser
                nameLabel="Senha"
                name="password"
                type="password"
                placeholder="No mínimo 8 dígitos"
                required
                value={form.password}
                onChange={handleChange}
              />
              <InputUser
                nameLabel="Repita a senha"
                name="repeatPassword"
                type="password"
                required
                placeholder="A mesma senha de cima"
                value={form.repeatPassword}
                onChange={handleChange}
              />
              <Button onClick={() => {}}>Criar conta</Button>
            </>
          )}
        </FormRegister>
      </MiniContainer>
    </LayoutInit>
  );
};

export default SignUp;

//TODO VALIDAÇÃO DO CEP CASO PRESCISE
// const submitForm = (e: FormEvent<HTMLFormElement>) => {
//   e.preventDefault();
//   setForm(registerUser);
//   console.log("Formulário enviado", form);
// };

// const checkCEP = (e: React.ChangeEvent<HTMLInputElement>) => {
//   const cep = e.target.value.replace(/\D/g, "");
//   fetch(`https://viacep.com.br/ws/${cep}/json/`)
//     .then((res) => res.json())
//     .then((data) => {
//       setValue("cep", data.cep);
//       setValue("address", data.logradouro);
//       setValue("city", data.localidade);
//       setValue("state", data.uf);
//       setValue("district", data.bairro);
//       setFocus("addressNumber");

//     });
// };
