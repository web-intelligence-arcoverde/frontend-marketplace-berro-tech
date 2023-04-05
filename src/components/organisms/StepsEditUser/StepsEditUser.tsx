import { useAppDispatch, useAppSelector } from '@/hooks/useSelectorHook';
import { ContainerForm, FirstColumn, SecondColumn, AboutBussines, NextButtonContainer, NextButton } from "./style";
import {
  EditAccountImage,
  EditAccountInfo,
  EditAccountLocation,
  EditAccountPassword,
} from '../../';
import { userEditBasicInformationRequest } from '@/store/reducer/auth/actions';
import { IEditUserInfoProps } from '@/store/reducer/auth/types';

export const EditUserBasicInformations = () => {

  const dispatch = useAppDispatch()
  const formData = {} as  IEditUserInfoProps


  const handleSubmit = (event:  React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;;
    const inputs = form.querySelectorAll<HTMLInputElement>('[name]');
    inputs.forEach((input:any) => {
      const { name, value } = input;
        if(input.type === 'file'){
          formData[name] = input?.files[0]
        }
        else{
          formData[name] = value;
        }  
      });
      
      dispatch(userEditBasicInformationRequest(formData))
  };

  return (
    <ContainerForm onSubmit={handleSubmit} >
      <FirstColumn>
        <EditAccountInfo />
      </FirstColumn>
      <SecondColumn>
        <AboutBussines>
          <EditAccountImage />
        </AboutBussines>
        <NextButtonContainer>
          <NextButton type="submit">Salvar alterações</NextButton>
        </NextButtonContainer>
      </SecondColumn>
    </ContainerForm>
  );
};

const Steps = {
  0: EditUserBasicInformations,
  1: EditAccountPassword,
  2: EditAccountLocation,
};

export const StepsEditUser = () => {
  const { step_edit_user } = useAppSelector((state) => state.user);

  const Step = Steps[0];

  return <Step />;
};
