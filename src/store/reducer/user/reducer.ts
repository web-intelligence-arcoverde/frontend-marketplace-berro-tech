import { createReducer } from "@reduxjs/toolkit";
import { addUser, addPassword } from "./actions";
import { initialState } from "./initial";

export const userReducer = createReducer(initialState, (builder) => {
  builder

    .addCase(addUser, (state, action) => {
      const { name, email, phone } = action.payload;
      state.registerUser = {
        name,
        email,
        phone,
      };
    })
    .addCase(addPassword, (state, action) => {
      const { password, confirmationPassword } = action.payload;
      state.registerUser = {
        ...state.registerUser,
        password,
        confirmationPassword,
      };
    });
});
