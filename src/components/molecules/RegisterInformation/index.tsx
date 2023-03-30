import { FloatingLabelInput, FloatingLabelRadio, FloatingLabelTextarea } from "@/components";
import { useAppDispatch } from "@/hooks/useSelectorHook";
import { Ovino, TypeAnimal, Caprino } from "@/mock";
import { addProductInfo } from "@/store/reducer/product/actions";
import { ProductInfoType } from "@/store/reducer/product/types";
import { removeMoneyMask } from "@/util";
import { useState } from "react";
import { ContainerForm, FirstColumn, TitleStep, AboutBussinesColumn, AboutBussines, NextButtonContainer, NextButton } from "./style";



const RegisterInformation = (props: any) => {
  const dispatch = useAppDispatch()
  const formData = {} as ProductInfoType
  const [animalOption, setAnimalOption] = useState('')


  const handleSubmit = (event:  React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;;
    const inputs = form.querySelectorAll<HTMLInputElement>('[name]');

    inputs.forEach((input) => {
      const { name, value } = input;
        if(name === 'price'){
          formData[name] = removeMoneyMask(value);
        }else{
          formData[name] = value;
        }  
      });
      
      dispatch(addProductInfo(formData))
    props.clickStep(2)
  };

  return (
    <ContainerForm onSubmit={handleSubmit}>
      <FirstColumn>
        <TitleStep>Sobre o produto</TitleStep>
        <FloatingLabelInput
          required
          type="text"
          id="animalName"
          name="animalName"
          placeholder="Nome"
        />
        <FloatingLabelRadio
          required
          setOption={setAnimalOption}
          placeholder={"Animal"}
          name='animal'
          id="animal"
          labels={TypeAnimal}
        />
        <FloatingLabelRadio required disable={!animalOption} placeholder={"Raça"} name={'breed'} id="breed" labels={animalOption === 'Ovino' ? Ovino : Caprino} />
        <FloatingLabelRadio
          required
          placeholder={"Classificação"}
          id="classification"
          name="classification"
          labels={['Genética', 'Reposição']}
        />
        <FloatingLabelRadio
          required
          name="gender"
          placeholder={"Sexo"}
          id="gender"
          labels={['Macho', 'Fêmea']}
        />
        <FloatingLabelRadio
          required
          name="age"
          placeholder={"Idade"}
          id="age"
          labels={['Garrote', 'Novilha','Bezerra']}
        />
        <FloatingLabelInput
          required
          type="text"
          id="Weight"
          name="Weight"
          placeholder="Peso/kg"
        />
        <FloatingLabelInput
          type="date"
          id="birthday"
          name="birthday"
          placeholder="Data de nascimento"
        />
        <FloatingLabelTextarea
          required
          type="text"
          id="description"
          name="description"
          placeholder="Descrição"
        />
      </FirstColumn>
      <AboutBussinesColumn>
        <AboutBussines>
          <TitleStep>Sobre o negócio</TitleStep>
          <FloatingLabelRadio
            required
            isWhite
            placeholder={"Tipo de venda"}
            name='sellType'
            id="sellType"
            labels={["Em lote", "Por unidade"]}
          />
          <FloatingLabelInput
            required
            isWhite
            type="number"
            id="quantity"
            name="quantity"
            placeholder="quantidade de animais"
          />
          <FloatingLabelInput
            required
            isWhite
            type="text"
            id="price"
            name="price"
            placeholder="preço"
          />
          <FloatingLabelInput
            required
            isWhite
            type="number"
            id="installments"
            name="installments"
            placeholder="parcelas"
          />
        </AboutBussines>
        <NextButtonContainer>
          <NextButton type="submit">Próximo</NextButton>
        </NextButtonContainer>
      </AboutBussinesColumn>
    </ContainerForm>
  );
};

export default RegisterInformation;
