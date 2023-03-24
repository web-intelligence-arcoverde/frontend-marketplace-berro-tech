import { UserState } from "./types";

export const initialState: UserState = {
  token: "",
  lastSearchs: [],
  currentStep: 1,
  registerUser: {
    name: "",
    email: "",
    phone: "",
    password: "",
    repeatPassword: "",
  },
};
