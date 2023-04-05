import { all, call, put, takeLatest } from "redux-saga/effects";

import api from "@/service";
import { store } from "@/store";
import {
  changerPasswordSuccess,
  confirmationVerificationCodeSuccess,
  controlModal,
  signInEmailSuccess,
  signOutSuccess,
  signUpEmailError,
  signUpEmailSuccess,
  signUpGoogleSuccess,
  userEditBasicInformationSuccess,
  userLoggedInformationSuccess,
} from "./actions";
import { setStepRecoveryAccount } from "../step/actions";
import { currentStep } from "../product/actions";


function* signInEmail({ payload }: any): any {
  try {
    const { data } = yield call(api.post, "/sign-in", payload);
    localStorage.setItem("token", JSON.stringify(data.token.token));
    yield put(signInEmailSuccess(data));
    window.location.href = "/minhas-publicacoes";
  } catch (error: any) {
    yield put(
      signUpEmailError({ type: "error", message: "Credenciais inválidas" })
    );
    yield put(currentStep({ step: 1 }));
    yield put(controlModal(true));
  }
}

function* signUpEmail(): any {
  try {
    const user = store.getState().user.registerUser;
    const { data } = yield call(api.post, "/sign-up", user);
    localStorage.setItem("token", JSON.stringify(data.token));
    yield put(signUpEmailSuccess(data));
    window.location.href = "/minhas-publicacoes";
  } catch (e) {
    yield put(
      signUpEmailError({
        type: "error",
        message:
          "Este email já está em uso. Por favor, tente outro endereço de email",
      })
    );
    yield put(currentStep({ step: 1 }))
    yield put(controlModal(true));
  }
}

function* signInGoogle({ payload }: any): any {
  try {
    const { displayName, email, photoURL } = payload.user;

    const { data } = yield call(api.post, "/auth/google", {
      name: displayName,
      email,
      avatar_url: photoURL,
    });

    const { token } = data;
    localStorage.setItem("token", JSON.stringify(token.token));
    yield put(signUpGoogleSuccess(data));
    //window.location.href = '/minhas-publicacoes';
  } catch (e) {
    console.log(e);
  }
}
function* signInFacebook({ payload }: any): any {
  try {
    const { displayName, email, photoURL } = payload.user;

    yield call(api.post, "/auth/google", {
      name: displayName,
      email,
      avatar_url: photoURL,
    });
    //window.location.replace('/');
    //yield put(signUpSuccess(response))
  } catch (e) {
    console.log(e);
  }
}

function* recoveryAccountSendEmail({ payload }: any): any {
  try {
    yield call(api.post, "/user/forgot-password", { email: payload });
    yield put(setStepRecoveryAccount(1));
  } catch (e: any) {
    console.log(e);
    yield put(
      signUpEmailError({
        type: "error",
        message:
          " Email não encontrado. Cadastre-se ou contate-nos para ajuda. ",
      })
    );
    yield put(controlModal(true));
  }
}

function* confirmationVerificationCode({ payload }: any): any {
  try {
    const { data } = yield call(api.post, "/user/verify-token", {
      token: payload.code,
    });

    yield put(
      confirmationVerificationCodeSuccess({
        codeVerificationCode: data.verifyToken,
      })
    );

    yield put(setStepRecoveryAccount(2));
  } catch (e) {
    yield put(
      signUpEmailError({
        type: "error",
        message: "Código de verificação inválido",
      })
    );
    yield put(controlModal(true));
  }
}

function* changerPassword({ payload }: any): any {
  try {
    yield call(api.post, "/user/changer-password", payload);

    window.location.href = "/entrar";

    yield put(changerPasswordSuccess());
  } catch (e) {
    console.log(e);
  }
}

function* userLoggedInformation() {
  try {
    const { data } = yield call(api.get, "/user-informations");
    yield put(userLoggedInformationSuccess(data));
  } catch (error) {}
}

function* updateUserBasicInformation({ payload }: any): any {
  try {
    console.log(payload);

    yield put(userEditBasicInformationSuccess(payload));
  } catch (error) {}
}

function* signOut() {
  try {
    localStorage.removeItem("token");
    window.location.href = "/";
    yield put(signOutSuccess());
  } catch (error) {}
}

function* postsSaga() {
  yield all([
    takeLatest("auth/sign-in-email-request", signInEmail),
    takeLatest("auth/sign-up-email-request", signUpEmail),
    takeLatest("auth/sign-out-request", signOut),
    takeLatest(
      "auth/recovery-account-send-email-request",
      recoveryAccountSendEmail
    ),
    takeLatest(
      "auth/confirmation-verification-code-request",
      confirmationVerificationCode
    ),
    takeLatest("auth/changer-password-request", changerPassword),
    takeLatest("auth/sign-up-google-request", signInGoogle),
    takeLatest("auth/sign-up-facebook-request", signInFacebook),
    takeLatest("auth/user-logged-information-request", userLoggedInformation),
    takeLatest(
      "auth/user-edit-basic-information-request",
      updateUserBasicInformation
    ),
    takeLatest("auth/changer-password-request", changerPassword),
    takeLatest("auth/sign-up-google-request", signInGoogle),
    takeLatest("auth/sign-up-facebook-request", signInFacebook),
    takeLatest("auth/user-logged-information-request", userLoggedInformation),
  ]);
}

export default postsSaga;
