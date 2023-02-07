import { IMAGES } from "@/assets";
import { CardProductProps } from "@/types";

export const NavigationHeader = ["Início", "Negócios"];

export const MocksCard: CardProductProps[] = [
  {
    photo: IMAGES.Frame1,
    breed: "senepol",
    quantity: 3,
    name: "Garrote Senepol",
    city: "Campina Grande",
    state: "Paraiba",
    country: "Brasil",
    sex: "Macho",
    age: "3 anos",
    rank: "Genética",
  },
];
