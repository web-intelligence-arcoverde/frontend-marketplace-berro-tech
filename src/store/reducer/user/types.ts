export type UserState = {
  token: string;
  lastSearchs: string[];
  currentStep: any;
  registerUser: IRegisterUserProps;
  allProducts:any
  currentSearch:string
  searchMobile:boolean
};

export interface IRegisterUserProps {
  name?: string;
  email?: string;
  phone?: string;
  password?: string;
  repeatPassword?: string;
}
