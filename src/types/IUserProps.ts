import { IUserOffice } from "./SubTypes/IUserOffice";

export interface UserProps {
  id: number;
  office?: IUserOffice;
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