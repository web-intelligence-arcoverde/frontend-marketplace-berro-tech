import {all, call, put, takeLatest} from 'redux-saga/effects';
import api from '@/service';


function* getProductById({payload}: any): any {
  const {id} = payload.product;
  try {
    yield call(api.get, `/auth/googl/${payload.id}`,);
  } catch (e) {
    console.log(e);
  }
}

function* postsSaga() {
  yield all([
    takeLatest('GET_PRODUCT_ID', getProductById),
  ]);
}

export default postsSaga;

