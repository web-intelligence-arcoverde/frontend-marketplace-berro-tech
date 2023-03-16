import { FloatingLabelInput, FloatingLabelRadio } from "@/components";
import { ContainerForm, FirstColumn, TitleStep } from "./style";

const RegisterInformation = ({ formValues, setFormValues }: any) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const animalArray = ["Caprino", "Ovino"];

  return (
    <ContainerForm>
      <FirstColumn>
        <TitleStep>Sobre o produto</TitleStep>
        <FloatingLabelInput id="name" name="name" placeholder="Nome" />
        <FloatingLabelRadio
          placeholder={"Animal"}
          id={undefined}
          labels={animalArray}
        />
      </FirstColumn>
    </ContainerForm>
  );
};

export default RegisterInformation;
