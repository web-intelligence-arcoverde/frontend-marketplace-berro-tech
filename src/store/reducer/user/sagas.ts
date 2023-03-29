import axios from 'axios';
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

function* postsSaga() {
  yield all([takeLatest('user/sign-up-request', signUpEmail)]);
}

export default postsSaga;
