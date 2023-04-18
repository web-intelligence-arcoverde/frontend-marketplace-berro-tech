export type UserState = {
  registerUser: IRegisterUserProps;

  user: any;

  user_by_id: any;
  loading_user_by_id: boolean;

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
