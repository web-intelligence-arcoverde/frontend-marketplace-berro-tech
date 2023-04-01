export type UserState = {
  token: string;
  lastSearchs: string[];
  currentStep: any;
  registerUser: IRegisterUserProps;
  allProducts: any;
  currentSearch: string;
  searchMobile: boolean;
  loginSingProvider:ILoginGoogle | any
};

export interface IRegisterUserProps {
  name?: string;
  email?: string;
  phone?: string;
  password?: string;
  confirmationPassword?: string;
}

export interface ISignIn {
  email: string;
  password: string;
}

export interface ILoginGoogle {
  email:string
  name:string
  photo:string
  phoneNumber:string
}