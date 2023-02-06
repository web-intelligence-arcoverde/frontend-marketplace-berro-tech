import { IProductCategoryProps } from "./SubTypes/Icategory";

export interface ProductProps {
  id: number;
  category: IProductCategoryProps;
  breed: string;
  name: string;
  currentImage: string;
  images?: [
    {
      id: number;
      link: string;
    }
  ];
  video?: {
    id: number;
    link: string;
  };
  description: string;
  document: string;
  age: string;
  price: number;
}