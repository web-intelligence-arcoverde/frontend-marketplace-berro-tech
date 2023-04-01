import {createAction} from '@reduxjs/toolkit';
import {ISignIn} from './types';

export const signUpEmailRequest = createAction('auth/sign-up-email-request');
export const signUpEmailSuccess = createAction<any>(
  'auth/sign-up-email-success',
);

export const signUpFacebookRequest = createAction<any>(
  'auth/sign-up-facebook-request',
);
export const signUpFacebookSuccess = createAction<any>(
  'auth/sign-up-facebook-success',
);

export const signUpGoogleRequest = createAction<any>(
  'auth/sign-up-google-request',
);
export const signUpGoogleSuccess = createAction<any>(
  'auth/sign-up-google-success',
);

export const signInEmailRequest = createAction<ISignIn>(
  'auth/sign-in-email-request',
);
export const signInEmailSuccess = createAction<any>(
  'auth/sign-in-email-success',
);

export const signOutRequest = createAction('auth/sign-out-request');
export const signOutSuccess = createAction('auth/sign-out-success');

export const recoveryAccountSendEmailRequest = createAction<{email: string}>(
  'auth/recovery-account-send-email-request',
);

export const recoveryAccountSendEmailSuccess = createAction(
  'auth/recovery-account-send-email-success',
);
