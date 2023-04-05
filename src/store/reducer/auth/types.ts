export type IAuthState = {
  token: string;
  user: any;
  recoveryEmail: string;
  codeVerificationCode: string;
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
  phone?: string;
  accountUrl?: string;
}
export interface IEditUserPasswordProps {
  [key: string]: any;
  password?: string;
  confirmationPassword?: string;
}
export interface IEditUserLocationProps {
  [key: string]: any;
  state?: string;
  city?: string;
}
