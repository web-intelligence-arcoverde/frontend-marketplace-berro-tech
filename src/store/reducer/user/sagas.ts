import {all, call, put, takeLatest} from 'redux-saga/effects';

import api from '@/service';
import {store} from '@/store';

function* signUpEmail(): any {
  try {
    const user = store.getState().user.registerUser;
    yield call(api.post, '/sign-up', user);
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
    yield put(signUpSuccess(data));
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

function* postsSaga() {
  yield all([
    takeLatest('user/sign-up-request', signUpEmail),
    takeLatest('LOGIN_SIGN_PROVIDER', signInProviderGmail),
    takeLatest('LOGIN_SIGN_PROVIDER', signInProviderFacebbok),
  ]);
}

export default postsSaga;
function signUpSuccess(data: any): any {
  throw new Error('Function not implemented.');
}

