export type IAuthState = {
  token: string;
  user: IEditUserInfoProps & IEditUserPasswordProps & IEditUserLocationProps;
  recoveryEmail: string;
  codeVerificationCode: string;
  error?: any;
  modalError: boolean;
  myProducts: [];
  loading: boolean;
  filterProducts: any
};

export interface ISignIn {
  email: string;
  password: string;
}

export interface IChangerPassword {
  token: string;
  password: string;
  confirmationPassword: string;
}

export interface IEditUserInfoProps {
  [key: string]: any;
  name?: string;
  email?: string;
  phone?: any;
  avatar_url?: any;
}
export interface IEditUserPasswordProps {
  [key: string]: any;
  password?: string;
  confirmationPassword?: string;
}
export interface IEditUserLocationProps {
  [key: string]: any;
  uf?: any;
  city?: any;
}
export interface CustomError {
  type: 'error' | 'sucess' | 'loading';
  message: string;
}
