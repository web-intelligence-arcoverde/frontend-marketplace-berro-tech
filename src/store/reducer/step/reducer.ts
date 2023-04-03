import {createReducer} from '@reduxjs/toolkit';
import {setStepRecoveryAccount} from './actions';

import {initialState} from './initial';

export const step = createReducer(initialState, (builder) => {
  builder.addCase(setStepRecoveryAccount, (state, action) => {
    state.recovery_account_step = action.payload;
  });
});
