import { CreateProductInfo, FloatingLabelInput, FloatingLabelRadio, FloatingLabelTextarea } from "@/components";
import { useAppDispatch } from "@/hooks/useSelectorHook";
import { Ovino, TypeAnimal, Caprino } from "@/mock";
import { addProductInfo } from "@/store/reducer/product/actions";
import { ProductInfoType } from "@/store/reducer/product/types";
import { removeMoneyMask } from "@/util";
import { useState } from "react";
import { ContainerForm, FirstColumn, TitleStep, SecondColumn, AboutBussines, NextButtonContainer, NextButton } from "./style";



const RegisterInformation = (props: any) => {
  const dispatch = useAppDispatch()
  const formData = {} as ProductInfoType


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
        <TitleStep>{props.firstColumnTitle}</TitleStep>
          <props.firstColumnChilren />
      </FirstColumn>
      <SecondColumn>
        <AboutBussines>
          <TitleStep>{props.secondColumnTitle}</TitleStep>
          <props.secondColumnChilren/>
        </AboutBussines>
        <NextButtonContainer>
          <NextButton type="submit">Próximo</NextButton>
        </NextButtonContainer>
      </SecondColumn>
    </ContainerForm>
  );
};

export default RegisterInformation;
