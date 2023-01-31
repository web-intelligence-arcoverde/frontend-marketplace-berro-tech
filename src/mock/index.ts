import { ICONS, IMAGES } from "@/assets";
import { CardProps } from "@/types";

export const NavigationHeader = [
  { name: "favorito", icon: ICONS.Star },
  { name: "mensagens", icon: ICONS.Message },
  { name: "alerta", icon: ICONS.Alert },
];

export const MocksCard: CardProps[] = [
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
