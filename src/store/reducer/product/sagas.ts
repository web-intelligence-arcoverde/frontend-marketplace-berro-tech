import {all, call, put, takeLatest} from 'redux-saga/effects';
import api from '@/service';
import { productsWithOutFilters, topSearches } from './actions';


function* getProductById({payload}: any): any {
  const {id} = payload.product;
  try {
    yield call(api.get, `/auth/googl/${payload.id}`,);
  } catch (e) {
    console.log(e);
  }
}
function* getAllProducts() {
  try {
   const {data}= yield call(api.get, `/products`,);
   yield put(productsWithOutFilters(data))
   yield put(topSearches(data))
  } catch (e) {
    console.log(e);
  }
}

function* postsSaga() {
  yield all([
    takeLatest('GET_PRODUCT_ID', getProductById),
    takeLatest('GET_ALL_PRODUCTS', getAllProducts),
  ]);
}

export default postsSaga;

