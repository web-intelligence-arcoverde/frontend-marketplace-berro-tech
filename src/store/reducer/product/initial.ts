import { ProductInfoType, ProductLocationType } from './types';
import { IProduct } from '@/types/ICardProductProps';

export const initialState: any = {
  productInfo: {
    name: '',
    breed: '',
    classification: '',
    gender: '',
    weight: '',
    birthday: null,
    description: '',
    sellType: '',
    quantity: null,
    price: null,
    installments: null,
  } as ProductInfoType,
  productImages: [] as File[],
  productLocation: {
    state: '',
    city: '',
  } as ProductLocationType,
  loading: false,
  sucess: false,
  lastSearchs: [],
  allProducts: [],
  searchMobile: true,
  currentSearch: '',
  currentStep: 1,
  removeProductModal: false,

  allFilterSelected: [],
  product: {} as ProductInfoType & ProductLocationType & File[],
  productSelected: {} as IProduct,
  currentPhoto: '' as string,

  breeds: [],
  animals: [],
  age_categories: [],
  classifications: [],
  sales: [],

  visibility_modal_add_product: false,

  product_by_id: {},
  loading_search_product_by_id: true,

  modal_update_product: false,

  topSearches: [],
  topSearchesFilter: 'top',

  quickSearchProducts: [],

  featuredProducts: [],
  featuredProductsLoading: true,

  filterProductByAnimal: []
};
