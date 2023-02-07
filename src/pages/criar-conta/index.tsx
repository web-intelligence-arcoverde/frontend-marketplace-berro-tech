import { Button } from "@/components";
import { useForm } from "react-hook-form";

import Link from "next/link";
import { Input } from "@/components/atoms/Input/style";

const SignUp = () => {
  // const [form, setForm] = useState(registerUser);

  // const handleChange = (event: ChangeEvent<HTMLinputElement>) => {
  //   const { name, value } = event.target;
  //   setForm((prevForm) => ({ ...prevForm, [name]: value }));
  // };

  const { register, handleSubmit, setValue, setFocus } = useForm();

  const onSubmit = (e: any) => {
    console.log(e);
  };

  // const submitForm = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setForm(registerUser);
  //   console.log("Formulário enviado", form);
  // };

  const checkCEP = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cep = e.target.value.replace(/\D/g, "");
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setValue("cep", data.cep);
        setValue("address", data.logradouro);
        setValue("city", data.localidade);
        setValue("state", data.uf);
        setValue("district", data.bairro);
        setFocus("addressNumber");
   
      });
  };

  return (
    <Link
      href=""
      passHref
      legacyBehavior
      style={{
        display: "flex",
        flexDirection: "column",
        width: "500px",
        margin: "auto",
        height: "70vh",
      }}
    >
      <form
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
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
          {...register("email")}
          type="email"
          placeholder="Digite seu E-mail"
          required
        />
        <Input
          {...register("fullName")}
          type="text"
          placeholder="Digite seu nome"
        />
        <Input
          {...register("cep")}
          type="text"
          placeholder="CEP"
          onBlur={checkCEP}
        />

        <div style={{ display: "flex", gap: "5px" }}>
          <Input
            {...register("city")}
            type="text"
            placeholder="Cidade"
          />
          <Input
            {...register("state")}
            width="150px"
            name="state"
            type="text"
            placeholder="Estado"
          />
        </div>
        <div style={{ display: "flex", gap: "5px" }}>
          <Input
            {...register("address")}
            type="text"
            placeholder="Endereço "
          />
          <Input
            {...register("addressNumber")}
            width="150px"
            type="text"
            placeholder="Número "
          />
        </div>
        <Input
          {...register("district")}
          type="text"
          placeholder="Bairro "
        />
        <Input
          {...register("phone")}
          type="tel"
          placeholder="Ex: (87) 991054786 "
        />
        <Input
          {...register("password")}
          type="password"
          placeholder="Digite sua senha"
        />
        <Input
          {...register("confirmPassword")}
          type="password"
          placeholder="Confirme sua senha "
        />

        <Button onClick={()=>{onSubmit}}>Cadastrar</Button>
      </form>
    </Link>
  );
};

export default SignUp;
