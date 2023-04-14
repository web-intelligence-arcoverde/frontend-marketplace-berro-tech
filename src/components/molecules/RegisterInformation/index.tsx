import {useAppDispatch} from '@/hooks/useSelectorHook';
import {addProductInfo} from '@/store/reducer/product/actions';
import {ProductInfoType} from '@/store/reducer/product/types';
import {removeMoneyMask} from '@/util';
import {
  ContainerForm,
  FirstColumn,
  TitleStep,
  SecondColumn,
  AboutBussines,
  NextButtonContainer,
  NextButton,
} from './style';
import {CreateProductInfo} from '../CreateProductInfo';
import {CreateProductBussines} from '../CreateProductBussines';

const RegisterInformation = (props: any) => {
  const dispatch = useAppDispatch();
  const formData = new FormData()
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const inputs = form.querySelectorAll<HTMLInputElement>('[name]');
    inputs.forEach((input: any) => {
      const {name, value} = input;
        formData.append(name, value);
    });
    
    dispatch(addProductInfo(formData));
    props.clickStep(2);
  
  };

  return (
    <ContainerForm onSubmit={handleSubmit}>
      <FirstColumn>
        <TitleStep>Sobre o produto</TitleStep>
        <CreateProductInfo />
      </FirstColumn>
      <SecondColumn>
        <AboutBussines>
          <TitleStep>Sobre o negócio</TitleStep>
          <CreateProductBussines />
        </AboutBussines>
        <NextButtonContainer>
          <NextButton type='submit'>Próximo</NextButton>
        </NextButtonContainer>
      </SecondColumn>
    </ContainerForm>
  );
};

export default RegisterInformation;
