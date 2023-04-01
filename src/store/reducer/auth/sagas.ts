import {all, call, put, takeLatest} from 'redux-saga/effects';

import api from '@/service';
import {store} from '@/store';
import {
  signInEmailSuccess,
  signOutSuccess,
  signUpEmailSuccess,
} from './actions';
import {setStepRecoveryAccount} from '../step/actions';

function* signInEmail({payload}: any): any {
  try {
    const {data} = yield call(api.post, '/sign-in', payload);
    localStorage.setItem('token', JSON.stringify(data.token.token));
    yield put(signInEmailSuccess(data));
    window.location.href = '/minhas-publicacoes';
  } catch (error) {
    console.log(error);
  }
}

function* signUpEmail(): any {
  try {
    const user = store.getState().user.registerUser;
    const {data} = yield call(api.post, '/sign-up', user);
    localStorage.setItem('token', JSON.stringify(data.token));
    yield put(signUpEmailSuccess(data));
    window.location.href = '/minhas-publicacoes';
  } catch (e) {
    console.log(e);
  }
}

function* signInProviderGmail({payload}: any): any {
  try {
    const {displayName, email, photoURL} = payload.user;

    const {data} = yield call(api.post, '/auth/google', {
      name: displayName,
      email,
      avatar_url: photoURL,
    });

    const {token} = data;

    localStorage.setItem('token', JSON.stringify(token.token));

    //window.location.replace('/');
    //yield put(signUpGoogleSuccess(data));
  } catch (e) {
    console.log(e);
  }
}
function* signInProviderFacebbok({payload}: any): any {
  try {
    const {displayName, email, photoURL} = payload.user;

    yield call(api.post, '/auth/google', {
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

function* recoveryAccountSendEmail({payload}: any): any {
  try {
    yield call(api.post, '/user/forgot-password', payload.email);
    yield put(setStepRecoveryAccount(1));
  } catch (e) {
    console.log(e);
  }
}

function* signOut() {
  try {
    localStorage.removeItem('token');
    window.location.href = '/';
    yield put(signOutSuccess());
  } catch (error) {}
}

function* postsSaga() {
  yield all([
    takeLatest('auth/sign-in-email-request', signInEmail),
    takeLatest('auth/sign-up-email-request', signUpEmail),
    takeLatest('auth/sign-out-request', signOut),
    takeLatest(
      'auth/recovery-account-send-email-request',
      recoveryAccountSendEmail,
    ),
  ]);
}

export default postsSaga;
