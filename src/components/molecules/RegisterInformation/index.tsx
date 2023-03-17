import { FloatingLabelInput, FloatingLabelRadio } from "@/components";
import { Ovino, TypeAnimal } from "@/mock";
import { ContainerForm, FirstColumn, TitleStep } from "./style";

const RegisterInformation = ({ formValues, setFormValues }: any) => {
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
