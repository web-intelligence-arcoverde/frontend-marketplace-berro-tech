import { FloatingLabelInput, FloatingLabelRadio } from "@/components";
import { Ovino, TypeAnimal } from "@/mock";
import { ContainerForm, FirstColumn, TitleStep } from "./style";

const RegisterInformation = ({ formValues, setFormValues }: any) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <ContainerForm>
      <FirstColumn>
        <TitleStep>Sobre o produto</TitleStep>
        <FloatingLabelInput id="name" name="name" placeholder="Nome" />
        <FloatingLabelRadio
          placeholder={"Animal"}
          id="animal"
          labels={TypeAnimal}
        />
        <FloatingLabelRadio placeholder={"Raça"} id="breed" labels={Ovino} />
      </FirstColumn>
    </ContainerForm>
  );
};

export default RegisterInformation;
