import { ICONS, IMAGES } from "@/assets";
import { CardProductProps } from "@/types";

export const NavigationHeader = [
  { name: "favorito", icon: ICONS.Star },
  { name: "mensagens", icon: ICONS.Message },
  { name: "alerta", icon: ICONS.Alert },
];

export const MocksCard: CardProductProps[] = [
  {
    photo:
      "https://www.petz.com.br/blog/wp-content/uploads/2022/05/diferenca-entre-boi-e-touro-topo.jpg",
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

export const PresentationInfoCardMock = [
  {
    icon: ICONS?.SearchBlue,
    iconName: "procura",
    title: "Encontre animais",
    description: "Busque por caprinos e ovinos",
  },
  {
    icon: ICONS?.Document,
    iconName: "Documento",
    title: "Consulte as informações",
    description: "De cada produto facilmente",
  },
  {
    icon: ICONS?.Phone,
    iconName: "telefone",
    title: "Entre em contato",
    description: "E negocie com o vendedor",
  },
];

export const BussinessHighlightProductMock:CardProductProps[] = [
  {
    photo:IMAGES.GadoOne,
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
  {
    photo:IMAGES.GadoTwo,
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
  {
    photo:IMAGES.GadoThree,
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
  {
    photo:IMAGES.GadoFour,
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
  {
    photo:IMAGES.GadoFive,
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
  {
    photo:IMAGES.GadoSix,
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
]