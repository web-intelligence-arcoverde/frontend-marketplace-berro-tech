export interface ProductInfoType {
  [key: string]: any;
  animalName: string | null;
  animal: string | null;
  race: string | null;
  classification: string | null;
  gender: string | null;
  age: string | null;
  Weight: string | null;
  birthday: Date | null;
  description: string | null;
  sellType: string | null;
  quantity: number | null;
  price: number | null;
  installments: number | null;
  
}
export interface ProductLocationType {
  [key: string]: any;
  state: string | null;
  city: string | null;
}
