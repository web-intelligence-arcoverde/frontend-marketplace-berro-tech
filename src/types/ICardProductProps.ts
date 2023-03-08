import { StaticImageData } from "next/image";
;
export interface CardProductProps {
  id:number
  photo: StaticImageData | string;
  breed: string;
  quantity: number;
  name: string;
  city: string;
  state: string;
  country: string;
  sex: string;
  age: string;
  rank: string;
}