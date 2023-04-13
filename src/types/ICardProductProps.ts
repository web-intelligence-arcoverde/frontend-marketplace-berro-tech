import { StaticImageData } from "next/image";
export interface CardProductProps {
  id: number;
  photo?: StaticImageData | string;
  breed: string;
  quantity: number;
  name: string;
  city: string;
  state: string;
  sex: string;
  phone?: string
  age: string;
  rank: string;
  maxWidth?: string;
  isProductPage?: boolean;
  onClick?: () => void;
  width?:string;
  minWidth?:string
  widthTablet?:string
  visit?:number
}
export interface IProduct {
  id: number;
  name: string;
  gender: string;
  age: string;
  weight: number;
  date: string;
  description: string;
  visited: number;
  deadline_exclude: string;
  user_id: number;
  created_at: string;
  updated_at: string;
  classification: {
  id: number;
  name: string;
  product_id: number;
  created_at: string;
  updated_at: string;
  };
  business: {
  id: number;
  price: number;
  installments: number;
  amount: number;
  product_id: number;
  created_at: string;
  updated_at: string;
  };
  animal: {
  id: number;
  name: string;
  product_id: number;
  created_at: string;
  updated_at: string;
  };
  breed: {
  id: number;
  name: string;
  product_id: number;
  animal_id: number;
  created_at: string;
  updated_at: string;
  };
  documents: {
  id: number;
  file: string;
  url: string;
  user_id: number | null;
  product_id: number;
  created_at: string;
  updated_at: string;
  }[];
  address: {
  id: number;
  cep: string | null;
  state: string;
  city: string;
  street: string | null;
  reference: string | null;
  number: number | null;
  user_id: number;
  product_id: number;
  created_at: string;
  updated_at: string;
  };
  sale: {
  id: number;
  name: string;
  product_id: number;
  business_id: number;
  created_at: string;
  updated_at: string;
  };
  isProductPage?: boolean;
  onClick?: () => void;
  width?:string;
  minWidth?:string
  widthTablet?:string
  }
  export interface IDocument {
    id: number;
    file: string;
    url: string;
    user_id: number | null;
    product_id: number;
    created_at: string;
    updated_at: string;
  }