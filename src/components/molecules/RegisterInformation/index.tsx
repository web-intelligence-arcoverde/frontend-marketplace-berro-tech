
import { useAppDispatch } from "@/hooks/useSelectorHook";
import { addProductInfo } from "@/store/reducer/product/actions";
import { ProductInfoType } from "@/store/reducer/product/types";
import { removeMoneyMask } from "@/util";
import { ContainerForm, FirstColumn, TitleStep, SecondColumn, AboutBussines, NextButtonContainer, NextButton } from "./style";
import { userEditBasicInformationRequest } from "@/store/reducer/auth/actions";
import { IEditUserInfoProps } from "@/store/reducer/auth/types";



const RegisterInformation = (props: any) => {
  const dispatch = useAppDispatch()
  const formData = {} as ProductInfoType & IEditUserInfoProps


  const handleSubmit = (event:  React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;;
    const inputs = form.querySelectorAll<HTMLInputElement>('[name]');
    inputs.forEach((input:any) => {
      const { name, value } = input;
        if(name === 'price'){
          formData[name] = removeMoneyMask(value);
        }else if(input.type === 'file'){
          formData[name] = input?.files[0]
        }
        else{
          formData[name] = value;
        }  
      });
      
      dispatch(addProductInfo(formData))
      dispatch(userEditBasicInformationRequest(formData))
      props.submitButtonText === 'Próximo' && props.clickStep(2)
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
          <NextButton type="submit">{props.submitButtonText}</NextButton>
        </NextButtonContainer>
      </SecondColumn>
    </ContainerForm>
  );
};

export default RegisterInformation;
