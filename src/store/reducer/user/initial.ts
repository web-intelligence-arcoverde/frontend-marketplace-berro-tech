import { UserState } from "./types";

export const initialState: UserState = {
  token: "",
  lastSearchs: [],
  registerProduct: [{ name: "", animal: "", breed: "" }],
};
