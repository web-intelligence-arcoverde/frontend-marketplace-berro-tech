import { RegisterUserProps } from "./../types/index";
import { ICONS } from "@/assets";

export const NavigationHeader = [
  { name: "favorito", icon: ICONS.Star },
  { name: "mensagens", icon: ICONS.Message },
  { name: "alerta", icon: ICONS.Alert },
];

export const registerUser: RegisterUserProps = {
  id: 0,
  office: "user",
  email: "",
  fullName: "",
  cep: "",
  city: "",
  state: "",
  address: "",
  numberAddress:"",
  district: "",
  phone: '',
  password: "",
  confirmPassword: "",
  saleScore: 0,
  shopingScore: 0,
  totalScore: 0,
};
