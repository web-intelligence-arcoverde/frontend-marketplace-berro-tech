import { FloatingLabelInput } from "@/components";
import { useAppDispatch, useAppSelector } from "@/hooks/useSelectorHook";
import { ProductLocationType } from "@/store/reducer/product/types";
import { Container, ContainerInputs, NextButton, NextButtonContainer, ContainerTitle } from "./style";
import { userEditLocationInformationRequest } from "@/store/reducer/auth/actions";
import { IEditUserLocationProps } from "@/store/reducer/auth/types";


export const EditAccountLocation = (props: any) => {
  const dispatch = useAppDispatch()
  const formData = {} as IEditUserLocationProps


  const handleSubmit = (event:  React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;;
    const inputs = form.querySelectorAll<HTMLInputElement>('[name]');

    inputs.forEach((input) => {
      const { name, value } = input;
        formData[name] = value;
      });
      
      dispatch(userEditLocationInformationRequest(formData))
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
        <NextButton type="submit">Confirmar alteração</NextButton>
      </NextButtonContainer>
    </Container>
  );
};

