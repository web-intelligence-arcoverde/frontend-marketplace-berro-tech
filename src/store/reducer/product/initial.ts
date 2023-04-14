import { ProductInfoType, ProductLocationType } from "./types";
import { IProduct } from "@/types/ICardProductProps";

export const initialState: any = {
  productInfo: {
    animalName: "",
    animal: "",
    race: "",
    classification: "",
    gender: "",
    age: "",
    Weight: "",
    birthday: null,
    description: "",
    sellType: "",
    quantity: null,
    price: null,
    installments: null,
  } as ProductInfoType,
  productImages: [] as File[],
  productLocation: {
    state: "",
    city: "",
  } as ProductLocationType,
  loading: false,
  sucess: false,
  lastSearchs: [],
  allProducts: [],
  searchMobile: true,
  currentSearch: "",
  currentStep: 1,
  removeProductModal: false,
  topSearches:[],
  topSearchesFilter:'top',
  allFilterSelected:[],
  product:{} as ProductInfoType & ProductLocationType & File[],
  productSelected:{} as IProduct,
  currentPhoto:'' as string
}; 
