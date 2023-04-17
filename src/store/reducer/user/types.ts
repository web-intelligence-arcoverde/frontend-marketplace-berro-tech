export type UserState = {
  registerUser: IRegisterUserProps;

  user: any;

  step_edit_user: number;
  visibility_modal_edit_user: boolean;
  profile_seller: object;
};

export interface IRegisterUserProps {
  name?: string;
  email?: string;
  phone?: string;
  password?: string;
  confirmationPassword?: string;
}
