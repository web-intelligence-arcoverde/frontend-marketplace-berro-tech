import { BussinessHighlightProductMock } from "@/mock";
import { ProductInfoType, ProductLocationType } from "./types";

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
  allProducts: BussinessHighlightProductMock,
  searchMobile: true,
  currentSearch: "",
  currentStep: 1,
  removeProductModal: false,
  topSearches:BussinessHighlightProductMock,
  topSearchesFilter:'top'
};
