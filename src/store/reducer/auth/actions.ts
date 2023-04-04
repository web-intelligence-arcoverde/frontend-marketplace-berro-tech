import {createAction} from '@reduxjs/toolkit';
import {ISignIn, IChangerPassword} from './types';

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

export const confirmationVerificationCodeRequest = createAction<{code: string}>(
  'auth/confirmation-verification-code-request',
);

export const confirmationVerificationCodeSuccess = createAction<{
  codeVerificationCode: string;
}>('auth/confirmation-verification-code-success');

export const changerPasswordRequest = createAction<IChangerPassword>(
  'auth/changer-password-request',
);

export const changerPasswordSuccess = createAction(
  'auth/changer-password-success',
);

export const userLoggedInformationRequest = createAction(
  'auth/user-logged-information-request',
);

export const userLoggedInformationSuccess = createAction<any>(
  'auth/user-logged-information-success',
);

export const userEditBasicInformationRequest = createAction<any>(
  'auth/user-edit-basic-information-request',
);

export const userEditBasicInformationSuccess = createAction<any>(
  'auth/user-edit-basic-information-success',
);
