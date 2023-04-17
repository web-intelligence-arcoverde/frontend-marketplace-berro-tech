export interface ProductInfoType {
  [key: string]: any;
  name: string | null;
  breed: string | null;

  classification: string | null;
  gender: string | null;
  weight: string | null;
  birthday: Date | null;
  description: string | null;
  sellType: string | null;
  quantity: number | null;
  price: number | null;
  installments: number | null;

  animals?: any;
  breeds?: any;
  age_categories?: any;
  classifications?: any;
  sales?: any;

  visibility_modal_add_product?: boolean;
}
export interface ProductLocationType {
  [key: string]: any;
  state: string | null;
  city: string | null;
}
