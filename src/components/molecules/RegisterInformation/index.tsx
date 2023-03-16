import { FloatingLabelInput } from "@/components/atoms/FloatingLabelInput";
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
      </FirstColumn>
    </ContainerForm>
  );
};

export default RegisterInformation;
