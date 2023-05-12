import { all, call, put, takeLatest } from 'redux-saga/effects';
import api from '@/service';
import {
  addProductPhotoSuccess,
  deleteProductPhotoSuccess,
  productsWithOutFilters,
  readAgeCategoriesSuccess,
  readAnimalSuccess,
  readBreedSuccess,
  readCityByUfSuccess,
  readClassificationsSuccess,
  readFeaturedProductsSuccess,
  readProductByIdSuccess,
  readProductSuccess,
  readSaleTypeSuccess,
  readStatesSuccess,
  topSearches,
  topSearchesFilterSuccess,
  updateProductBasicInformationSuccess,
  updateProductLocationSuccess,
} from './actions';
import { store } from '@/store';
import { userLoggedInformationRequest } from '../auth/actions';

function* getProductById({ payload }: any): any {
  try {
    yield call(api.get, `/auth/googl/${payload.id}`);
  } catch (e) {
    console.log(e);
  }
}

function* getAllProducts() {
  try {
    const { data } = yield call(api.get, `/products`);
    yield put(productsWithOutFilters(data));
    yield put(topSearches(data));
  } catch (e) {
    console.log(e);
  }
}

function* registerProduct() {
  try {
    const { productImages, productInfo, productLocation } =
      store.getState().product;

    const product = { ...productInfo, ...productLocation };

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

    yield put(userLoggedInformationRequest());
  } catch (e) {
    console.log(e);
  }
}

function* readAnimals() {
  try {
    const { data } = yield call(api.get, `/animal`);

    yield put(readAnimalSuccess(data));
  } catch (e) {
    console.log(e);
  }
}

function* readBreedByIdAnimal({ payload }: any) {
  try {
    const { data } = yield call(api.get, `/search-breed-by-name/${payload}`);

    yield put(readBreedSuccess(data));
  } catch (e) {
    console.log(e);
  }
}

function* readAgeCategories() {
  try {
    const { data } = yield call(api.get, `/age-categories`);

    yield put(readAgeCategoriesSuccess(data));
  } catch (e) {
    console.log(e);
  }
}

function* readClassifications() {
  try {
    const { data } = yield call(api.get, `/classification`);

    yield put(readClassificationsSuccess(data));
  } catch (e) {
    console.log(e);
  }
}

function* readSaleType() {
  try {
    const { data } = yield call(api.get, `/sale`);

    yield put(readSaleTypeSuccess(data));
  } catch (e) {
    console.log(e);
  }
}

function* readProductById({ payload }: any) {
  try {
    const { data } = yield call(api.get, `/product/${payload}`);
    let product = data;
    product.products = product.products[0];
    yield put(readProductByIdSuccess(product));
  } catch (e) {
    console.log(e);
  }
}

function* updateProductBasicInformation({ payload }: any) {
  try {
    yield call(api.put, `/product-step-1/${payload.id}`, payload);

    yield put(updateProductBasicInformationSuccess(payload));
  } catch (e) {
    console.log(e);
  }
}

function* deletePhotoProduct({ payload }: any) {
  try {
    yield call(api.delete, `/document/${payload}`);

    yield put(deleteProductPhotoSuccess(payload));
  } catch (e) {
    console.log(e);
  }
}

function* addPhotoProduct({ payload }: any) {
  try {
    const { files, id } = payload;

    var formData = new FormData();

    files.map((file: any) => {
      formData.append('document', file);
    });

    yield call(api.put, `/product-step-2/${id}`, formData);

    yield put(addProductPhotoSuccess(payload));
  } catch (e) {
    console.log(e);
  }
}

function* updateLocationProduct({ payload }: any) {
  try {
    const { id, formData } = payload;

    yield call(api.put, `/product-step-3/${id}`, formData);

    yield put(updateProductLocationSuccess(payload));
  } catch (e) {
    console.log(e);
  }
}

function* deleteProduct({ payload }: any) {
  try {
    yield call(api.delete, `/product/${payload}`);
  } catch (e) {
    console.log(e);
  }
}

function* searchLite({ payload }: any) {
  try {
    const { data } = yield call(api.post, `/search-product/`, payload);

    yield put(topSearchesFilterSuccess(data));
  } catch (e) {
    console.log(e);
  }
}

function* featuredProducts() {
  try {
    const { data } = yield call(api.post, `/search-product/`, { type: 'top' });

    yield put(readFeaturedProductsSuccess(data));
  } catch (e) {
    console.log(e);
  }
}

function* readProducts() {
  try {
    const { data } = yield call(api.get, `/products`);
    yield put(readProductSuccess(data));
  } catch (e) {
    console.log(e);
  }
}

function* renewLimitProduct({ payload }: any) {
  try {
    yield call(api.get, `/renewad/${payload}`);
  } catch (e) {
    console.log(e);
  }
}

function* readStates() {
  try {
    const { data } = yield call(api.get, `/state/`);
    yield put(readStatesSuccess(data));
  } catch (e) {
    console.log(e);
  }
}

function* readCities({ payload }: any) {
  try {
    const { data } = yield call(api.get, `/city/${payload}`);
    yield put(readCityByUfSuccess(data))
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

    takeLatest('PRODUCT/DELETE_PRODUCT_PHOTO_REQUEST', deletePhotoProduct),

    takeLatest('PRODUCT/ADD_PRODUCT_PHOTO_REQUEST', addPhotoProduct),

    takeLatest(
      'PRODUCT/UPDATE_PRODUCT_LOCATION_REQUEST',
      updateLocationProduct,
    ),

    takeLatest('REMOVE_PRODUCT', deleteProduct),

    takeLatest('TOP_SEARCHES_FILTER', searchLite),

    takeLatest('PRODUCT/READ_FEATURED_PRODUCTS_REQUEST', featuredProducts),

    takeLatest('PRODUCT/RENEW_LIMIT_PRODUCT', renewLimitProduct),

    takeLatest('PRODUCT/READ_PRODUCT_REQUEST', readProducts),

    takeLatest('PRODUCT/READ_STATES_REQUEST', readStates),

    takeLatest('PRODUCT/READ_CITY_BY_UF_REQUEST', readCities),

  ]);
}

export default postsSaga;
