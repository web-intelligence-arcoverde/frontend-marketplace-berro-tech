import { UserState } from "./types";

export const initialState: UserState = {
  token:
    (typeof window !== "undefined" &&
      JSON.parse(localStorage?.getItem("token") as string)) ||
    "",

  registerUser: {
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmationPassword: "",
  },

  loginSingProvider: {},
};
