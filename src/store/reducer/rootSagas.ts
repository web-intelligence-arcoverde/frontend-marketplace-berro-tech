import {all, fork} from 'redux-saga/effects';
import userSagas from './user/sagas';

import auth from './auth/sagas';
import product  from './product/sagas';

export function* rootSaga() {
  yield all([fork(userSagas), fork(auth),fork(product)]);
}
