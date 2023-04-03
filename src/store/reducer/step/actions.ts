import {createAction} from '@reduxjs/toolkit';

export const setStepRecoveryAccount = createAction<number>(
  'step/set-step-recovery-account',
);
