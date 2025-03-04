import {UserState} from './types';

export const initialState: UserState = {
  registerUser: {
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmationPassword: '',
  },

  user: {},
  step_edit_user: 0,
  visibility_modal_edit_user: false,
  profile_seller: {},

  user_by_id: {},
  loading_user_by_id: true,
};
