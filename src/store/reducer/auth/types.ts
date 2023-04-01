export type IAuthState = {
  token: string;
  user: any;
  recoveryEmail: string;
};

export interface ISignIn {
  email: string;
  password: string;
}
