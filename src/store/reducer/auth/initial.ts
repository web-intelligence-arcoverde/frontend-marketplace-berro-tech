import { IAuthState } from './types';

export const initialState: IAuthState = {
  token:
    (typeof window !== 'undefined' &&
      JSON.parse(localStorage?.getItem('token') as string)) ||
    '',
  user: {},
  recoveryEmail: '',
  codeVerificationCode: '',
  error: {},
  modalError: false,
  loading: true,
  myProducts: [],
  filterProducts: []
};
