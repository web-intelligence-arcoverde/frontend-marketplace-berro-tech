export type UserState = {
  registerUser: IRegisterUserProps;

  user: any;

  visibility_modal_add_product: boolean;
  step_edit_user: number;
  visibility_modal_edit_user: boolean;
};

export interface IRegisterUserProps {
  name?: string;
  email?: string;
  phone?: string;
  password?: string;
  confirmationPassword?: string;
}
