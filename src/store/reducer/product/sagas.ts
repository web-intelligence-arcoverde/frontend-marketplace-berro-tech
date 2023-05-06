import {all, call, put, takeLatest} from 'redux-saga/effects';
import api from '@/service';
import {
  addProductPhotoSuccess,
  deleteProductPhotoSuccess,
  productsWithOutFilters,
  readAgeCategoriesSuccess,
  readAnimalSuccess,
  readBreedSuccess,
  readClassificationsSuccess,
  readProductByIdSuccess,
  readSaleTypeSuccess,
  topSearches,
  updateProductLocationSuccess,
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

function* readProductById({payload}: any) {
  try {
    const {data} = yield call(api.get, `/product/${payload}`);
    let product = data;
    product.products = product.products[0];
    yield put(readProductByIdSuccess(product));
  } catch (e) {
    console.log(e);
  }
}

function* updateProductBasicInformation({payload}: any) {
  try {
    //yield call(api.put, `/product/${payload.id}`, payload);

    yield put(updateProductLocationSuccess(payload));
  } catch (e) {
    console.log(e);
  }
}

function* deletePhotoProduct({payload}: any) {
  try {
    //yield call(api.delete, `/document/${payload}`);

    yield put(deleteProductPhotoSuccess(payload));
  } catch (e) {
    console.log(e);
  }
}

function* addPhotoProduct({payload}: any) {
  try {
    var formData = new FormData();

    payload.map((file: any) => {
      formData.append('document', file);
    });

    //yield call(api.post, `/document/${payload}`,formData);

    yield put(addProductPhotoSuccess(payload));
  } catch (e) {
    console.log(e);
  }
}

function* updateLocationProduct({payload}: any) {
  try {
    //yield call(api.post, `/document/${payload}`,payload);

    yield put(updateProductLocationSuccess(payload));
  } catch (e) {
    console.log(e);
  }
}

function* postsSaga() {
  yield all([
    takeLatest('PRODUCT/READ_PRODUCT_BY_ID_REQUEST', readProductById),
    takeLatest('GET_PRODUCT_ID', getProductById),
    takeLatest('GET_ALL_PRODUCTS', getAllProducts),
    takeLatest('ADD_PRODUCT_LOCATION', registerProduct),
    takeLatest('PRODUCT/READ_ANIMAL_REQUEST', readAnimals),
    takeLatest('PRODUCT/READ_BREED_REQUEST', readBreedByIdAnimal),
    takeLatest('PRODUCT/AGE_CATEGORIES_REQUEST', readAgeCategories),
    takeLatest('PRODUCT/AGE_CLASSIFICATIONS_REQUEST', readClassifications),
    takeLatest('PRODUCT/SALE_TYPE_REQUEST', readSaleType),

    takeLatest(
      'PRODUCT/UPDATE_PRODUCT_BASIC_INFORMATION_REQUEST',
      updateProductBasicInformation,
    ),

    takeLatest('PRODUCT/UPDATE_PRODUCT_PHOTO_REQUEST', deletePhotoProduct),

    takeLatest('PRODUCT/ADD_PRODUCT_PHOTO_REQUEST', addPhotoProduct),

    takeLatest(
      'PRODUCT/UPDATE_PRODUCT_LOCATION_REQUEST',
      updateLocationProduct,
    ),
  ]);
}

export default postsSaga;
