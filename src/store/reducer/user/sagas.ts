import axios from 'axios';
import {all, call, put, takeLatest} from 'redux-saga/effects';

import api from '@/service';
import {store} from '@/store';
import {signInSuccess} from './actions';

function* signUpEmail(): any {
  try {
    const user = store.getState().user.registerUser;
    yield call(api.post, '/sign-up', user);
  } catch (e) {
    console.log(e);
  }
}

function* signIn({payload}: any): any {
  try {
    const {data} = yield call(api.post, '/sign-in', payload);
    localStorage.setItem('token', JSON.stringify(data.token));
    yield put(signInSuccess({token: data.token}));
  } catch (e) {
    console.log(e);
  }
}

function* postsSaga() {
  yield all([takeLatest('user/sign-up-request', signUpEmail)]);
  yield all([takeLatest('user/sign-in-request', signIn)]);
}

export default postsSaga;
