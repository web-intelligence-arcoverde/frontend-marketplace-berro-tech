import { FloatingLabelInput } from "@/components";
import { useAppDispatch, useAppSelector } from "@/hooks/useSelectorHook";
import { addProductLocation } from "@/store/reducer/product/actions";
import { ProductLocationType } from "@/store/reducer/product/types";
import { Container, ContainerInputs, NextButton, NextButtonContainer, ContainerTitle } from "./style";


const RegisterLocation = (props: any) => {
  const dispatch = useAppDispatch()
  const Loading = useAppSelector(state => state.product.loading)
  const sucess = useAppSelector(state => state.product.sucess)
  const formData = {} as ProductLocationType


  const handleSubmit = (event:  React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;;
    const inputs = form.querySelectorAll<HTMLInputElement>('[name]');

    inputs.forEach((input) => {
      const { name, value } = input;
        formData[name] = value;
      });
      
      dispatch(addProductLocation(formData))
      props?.registerProduct()
  };

  return (
    <Container onSubmit={handleSubmit}>
      <ContainerTitle>
        <h2>Usar sua localização padrão</h2>
        <ContainerInputs>
          <FloatingLabelInput
            type="text"
            id="state"
            isWhite
            name="state"
            placeholder="Estado"
          />
          <FloatingLabelInput
            type="text"
            id="city"
            isWhite
            name="city"
            placeholder="cidade"
          />
        </ContainerInputs>
      </ContainerTitle>
      <NextButtonContainer>
        <NextButton type="submit">Salvar alterações</NextButton>
      </NextButtonContainer>
    </Container>
  );
};

export default RegisterLocation;
