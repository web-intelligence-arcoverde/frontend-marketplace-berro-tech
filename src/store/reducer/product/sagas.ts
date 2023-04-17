import {all, call, put, takeLatest} from 'redux-saga/effects';
import api from '@/service';
import {
  productsWithOutFilters,
  readAgeCategoriesSuccess,
  readAnimalSuccess,
  readBreedSuccess,
  readClassificationsSuccess,
  readSaleTypeSuccess,
  topSearches,
} from './actions';
import {store} from '@/store';

function* getProductById({payload}: any): any {
  const {id} = payload.product;
  try {
    yield call(api.get, `/auth/googl/${payload.id}`);
  } catch (e) {
    console.log(e);
  }
}
function* getAllProducts() {
  try {
    const {data} = yield call(api.get, `/products`);
    yield put(productsWithOutFilters(data));
    yield put(topSearches(data));
  } catch (e) {
    console.log(e);
  }
}

function* registerProduct() {
  try {
    const {productImages, productInfo, productLocation} =
      store.getState().product;

    const product = {...productInfo, ...productLocation};

    var formData = new FormData();

    productImages.map((file: any) => {
      formData.append('document', file);
    });

    //formData.append('document', productImages);
    formData.append('productInfo', JSON.stringify(product));

    yield call(api.post, `/product`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  } catch (e) {
    console.log(e);
  }
}

function* readAnimals() {
  try {
    const {data} = yield call(api.get, `/animal`);

    yield put(readAnimalSuccess(data));
  } catch (e) {
    console.log(e);
  }
}

function* readBreedByIdAnimal({payload}: any) {
  try {
    const {data} = yield call(api.get, `/search-breed-by-name/${payload}`);

    yield put(readBreedSuccess(data));
  } catch (e) {
    console.log(e);
  }
}

function* readAgeCategories() {
  try {
    const {data} = yield call(api.get, `/age-categories`);

    yield put(readAgeCategoriesSuccess(data));
  } catch (e) {
    console.log(e);
  }
}

function* readClassifications() {
  try {
    const {data} = yield call(api.get, `/classification`);

    yield put(readClassificationsSuccess(data));
  } catch (e) {
    console.log(e);
  }
}

function* readSaleType() {
  try {
    const {data} = yield call(api.get, `/sale`);

    yield put(readSaleTypeSuccess(data));
  } catch (e) {
    console.log(e);
  }
}

function* postsSaga() {
  yield all([
    takeLatest('GET_PRODUCT_ID', getProductById),
    takeLatest('GET_ALL_PRODUCTS', getAllProducts),
    takeLatest('ADD_PRODUCT_LOCATION', registerProduct),
    takeLatest('PRODUCT/READ_ANIMAL_REQUEST', readAnimals),
    takeLatest('PRODUCT/READ_BREED_REQUEST', readBreedByIdAnimal),
    takeLatest('PRODUCT/AGE_CATEGORIES_REQUEST', readAgeCategories),
    takeLatest('PRODUCT/AGE_CLASSIFICATIONS_REQUEST', readClassifications),
    takeLatest('PRODUCT/SALE_TYPE_REQUEST', readSaleType),
  ]);
}

export default postsSaga;
