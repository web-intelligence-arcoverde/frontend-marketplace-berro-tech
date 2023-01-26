import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  padding?: string;
}

export interface UserProps {
  id: number;
  office?: "admin" | "user";
  fullName: string;
  email: string;
  state: string;
  city: string;
  district: string;
  address: string;
  numberAddress: string;
  phone: string;
  saleScore?: number;
  shopingScore?: number;
  totalScore: number;
}

export interface ProductProps {
  id: number;
  category: "caprino" | "ovino";
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
