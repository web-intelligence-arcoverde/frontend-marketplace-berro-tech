import {IProductCategoryProps} from './SubTypes/Icategory';

export interface ProductProps {
  id: number;
  category: IProductCategoryProps;
  breed: string;
  name: string;
  currentImage: string;
  images?: IImages[];
  video?: IVideo;
  description: string;
  document: string;
  age: string;
  price: number;
}

interface IImages {
  id: number;
  link: string;
}

interface IVideo {
  id: number;
  link: string;
}
