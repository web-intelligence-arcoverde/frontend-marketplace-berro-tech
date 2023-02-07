import {ICONS, IMAGES} from '@/assets';
import { CardProductProps } from "@/types";

export const NavigationHeader = [
  {name: 'favorito', icon: ICONS.Star},
  {name: 'mensagens', icon: ICONS.Message},
  {name: 'alerta', icon: ICONS.Alert},
];

export const MocksCard: CardProductProps[] = [
  {
    photo:
      'https://www.petz.com.br/blog/wp-content/uploads/2022/05/diferenca-entre-boi-e-touro-topo.jpg',
    breed: 'senepol',
    quantity: 3,
    name: 'Garrote Senepol',
    city: 'Campina Grande',
    state: 'Paraiba',
    country: 'Brasil',
    sex: 'Macho',
    age: '3 anos',
    rank: 'Genética',
  },
];
