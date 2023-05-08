import { store } from '@/store';
import { createReducer } from '@reduxjs/toolkit';
import {
  addProductInfo,
  addProductLocation,
  addProductImages,
  addItem,
  removeItem,
  filterItems,
  productsWithOutFilters,
  currentSearch,
  searchMobile,
  currentStep,
  removeProduct,
  removeProductModal,
  topSearches,
  topSearchesFilter,
  allFilterSelected,
  deleteFilterSelected,
  clearFiltersSelecteds,
  readAnimalSuccess,
  readBreedSuccess,
  setVisibilityModalAddProduct,
  readAgeCategoriesSuccess,
  readClassificationsSuccess,
  readSaleTypeSuccess,
  readProductByIdSuccess,
  readProductByIdRequest,
  openModalUpdateProduct,
  closeModalUpdateProduct,
  topSearchesFilterSuccess,
  readFeaturedProductsRequest,
  readFeaturedProductsSuccess,
} from './actions';

import { initialState } from './initial';

export const productReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addProductInfo, (state, action) => {
      state.productInfo = action.payload;
    })
    .addCase(addProductImages, (state, action) => {
      state.productImages = action.payload;
    })
    .addCase(addProductLocation, (state, action) => {
      state.productLocation = action.payload;
    })
    .addCase(addItem, (state, action) => {
      state.lastSearchs.unshift(action.payload);
    })
    .addCase(removeItem, (state, action) => {
      state.lastSearchs = state.lastSearchs.filter(
        (item: string) => item !== action.payload,
      );
    })
    .addCase(filterItems, (state, action) => {
      const filtro = action.payload.toLowerCase();
      let filterProducts = state.allProducts.filter((item: string) => {
        return Object.values(item).some(
          (value) => {
            let thisObj = typeof value === 'object'
            if (thisObj) {
              console.log(value.length)
            }


            return typeof value === 'string' && value.toLowerCase().includes(filtro)
          }
        );
      });

      state.allProducts = filterProducts
    })
    .addCase(productsWithOutFilters, (state, action) => {
      state.allProducts = action.payload;
    })
    .addCase(searchMobile, (state, action) => {
      state.searchMobile = !action.payload;
    })
    .addCase(currentSearch, (state, action) => {
      state.currentSearch = action.payload;
    })
    .addCase(currentStep, (state, action) => {
      state.currentStep = action.payload.step;
    })
    .addCase(removeProduct, (state, action) => {
      state.allProducts = state.allProducts.filter(
        (item: any) => item.id !== action.payload,
      );
    })
    .addCase(removeProductModal, (state, action) => {
      state.removeProductModal = !action.payload;
    })
    .addCase(topSearches, (state, action) => {
      state.topSearches = action.payload;
    })
    .addCase(topSearchesFilter, (state, action) => {
      state.topSearchesFilter = action.payload;
    })
    .addCase(allFilterSelected, (state, action) => {
      if (action.payload && action.payload.length > 0) {
        action.payload.forEach((item: string) => {
          if (!state.allFilterSelected.includes(item)) {
            state.allFilterSelected = [...state.allFilterSelected, item];
          }
        });
      }
    })
    .addCase(deleteFilterSelected, (state, action) => {
      state.allFilterSelected = state.allFilterSelected.filter(
        (item: string) => item !== action.payload,
      );
    })
    .addCase(clearFiltersSelecteds, (state, action) => {
      state.allFilterSelected = [];
    })

    .addCase(readAnimalSuccess, (state, action) => {
      state.animals = action.payload;
    })
    .addCase(readBreedSuccess, (state, action) => {
      state.breeds = action.payload;
    })
    .addCase(readAgeCategoriesSuccess, (state, action) => {
      state.age_categories = action.payload;
    })
    .addCase(readClassificationsSuccess, (state, action) => {
      state.classifications = action.payload;
    })
    .addCase(readSaleTypeSuccess, (state, action) => {
      state.sale = action.payload;
    })
    .addCase(setVisibilityModalAddProduct, (state, action) => {
      state.visibility_modal_add_product = action.payload;

      if (!action.payload) {
        state.animals = [];
        state.breeds = [];
      }
    })
    .addCase(readProductByIdRequest, (state) => {
      state.loading_search_product_by_id = true;
    })
    .addCase(readProductByIdSuccess, (state, action) => {
      state.product_by_id = action.payload;
      state.loading_search_product_by_id = false;
    })
    .addCase(openModalUpdateProduct, (state, action) => {
      state.modal_update_product = true;
    })
    .addCase(closeModalUpdateProduct, (state, action) => {
      state.modal_update_product = false;
    })
    .addCase(topSearchesFilterSuccess, (state, action) => {
      state.topSearches = action.payload;
    })
    .addCase(readFeaturedProductsSuccess, (state, action) => {
      state.featuredProducts = action.payload;
      state.featuredProductsLoading = false;
    });
});
