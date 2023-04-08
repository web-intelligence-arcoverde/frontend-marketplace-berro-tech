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
