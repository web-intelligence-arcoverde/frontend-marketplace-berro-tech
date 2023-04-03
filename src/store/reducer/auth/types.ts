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
