import {BussinessHighlightProductMock} from '@/mock';
import {UserState} from './types';

export const initialState: UserState = {
  token:
    (typeof window !== 'undefined' &&
      JSON.parse(localStorage?.getItem('token') as string)) ||
    '',
  lastSearchs: [],
  currentStep: 1,
  currentSearch: '',
  registerUser: {
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmationPassword: '',
  },
  searchMobile: true,
  allProducts: BussinessHighlightProductMock,
};
