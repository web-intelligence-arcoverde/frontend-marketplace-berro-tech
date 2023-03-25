export type UserState = {
  token: string;
  lastSearchs: string[];
  currentStep: any;
  registerUser: IRegisterUserProps;
  allProducts:any
};

export interface IRegisterUserProps {
  name?: string;
  email?: string;
  phone?: string;
  password?: string;
  repeatPassword?: string;
}
