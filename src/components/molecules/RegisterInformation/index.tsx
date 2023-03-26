import { FloatingLabelInput, FloatingLabelRadio } from "@/components";
import { Ovino, TypeAnimal } from "@/mock";
import { ContainerForm, FirstColumn, TitleStep, AboutBussinesColumn, AboutBussines, NextButtonContainer, NextButton } from "./style";

const RegisterInformation = () => {
  return (
    <ContainerForm>
      <FirstColumn>
        <TitleStep>Sobre o produto</TitleStep>
        <FloatingLabelInput
          isWhite
          type="text"
          id="name"
          name="name"
          placeholder="Nome"
        />
        <FloatingLabelRadio
          isWhite
          placeholder={"Animal"}
          id="animal"
          labels={TypeAnimal}
        />
        <FloatingLabelRadio placeholder={"Raça"} id="breed" labels={Ovino} />
      </FirstColumn>
      <AboutBussinesColumn>
        <AboutBussines>
          <TitleStep>Sobre o negócio</TitleStep>
          <FloatingLabelRadio
            isWhite
            placeholder={"Tipo de venda"}
            id="animal"
            labels={TypeAnimal}
          />
          <FloatingLabelInput
            isWhite
            type="number"
            id="quantity"
            name="quantity"
            placeholder="quantidade de animais"
          />
          <FloatingLabelInput
            isWhite
            type="number"
            id="price"
            name="price"
            placeholder="preço"
          />
          <FloatingLabelInput
            isWhite
            type="number"
            id="installments"
            name="installments"
            placeholder="parcelas"
          />
        </AboutBussines>
        <NextButtonContainer>
          <NextButton>Próximo</NextButton>
        </NextButtonContainer>
      </AboutBussinesColumn>
    </ContainerForm>
  );
};

export default RegisterInformation;
