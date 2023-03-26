import { FloatingLabelInput } from "@/components";
import { Container, ContainerInputs, NextButton, NextButtonContainer, ContainerTitle } from "./style";

const RegisterLocation = ({ formValues, setFormValues }: any) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <ContainerTitle>
        <h2>Usar sua localização padrão</h2>
        <ContainerInputs>
          <FloatingLabelInput
            type="text"
            id="estado"
            isWhite
            name="Estado"
            placeholder="Estado"
          />
          <FloatingLabelInput
            type="text"
            id="cidade"
            isWhite
            name="cidade"
            placeholder="cidade"
          />
        </ContainerInputs>
      </ContainerTitle>
      <NextButtonContainer>
        <NextButton>Salvar alterações</NextButton>
      </NextButtonContainer>
    </Container>
  );
};

export default RegisterLocation;
