import { ICONS, IMAGES } from "@/assets";
import RegisterInformation from "@/components/molecules/RegisterInformation";
import RegisterLocation from "@/components/molecules/RegisterLocation";
import RegisterPhotos from "@/components/molecules/RegisterPhotos";
import { CardProductProps } from "@/types";

export const NavigationHeader = [
  { name: "favorito", icon: ICONS.Star },
  { name: "mensagens", icon: ICONS.Message },
  { name: "alerta", icon: ICONS.Alert },
];
export const DropdownMock = ["Mais Recente", "Mais Antigo"];

export const MocksCard: any[] = [
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
export const BusinessFiltersMock = [
  {
    icon: ICONS?.LocationGray,
    iconName: "localização",
    title: "Estado",
    filters: [
      "Acre",
      "Alagoas",
      "Amapá",
      "Amazonas",
      "Bahia",
      "Ceará",
      "Distrito Federal",
      "Espírito Santo",
      "Goiás",
      "Maranhão",
      "Mato Grosso",
      "Mato Grosso do Sul",
      "Minas Gerais",
      "Pará",
      "Paraíba",
      "Paraná",
      "Pernambuco",
      "Piauí",
      "Rio de Janeiro",
      "Rio Grande do Norte",
      "Rio Grande do Sul",
      "Rondônia",
      "Roraima",
      "Santa Catarina",
      "São Paulo",
      "Sergipe",
      "Tocantins",
    ],
  },
  {
    icon: ICONS?.Classification,
    iconName: "Classificação",
    title: "Classificação",
    filters: ["Reposição", "Genética"],
  },
  {
    icon: ICONS?.Race,
    iconName: "Raça",
    title: "Raça",
    filters: [
      "Boer",
      "Anglo-Nubiana",
      "Saanen",
      "Alpina",
      "Toggenburg",
      "Moxotó",
      "Canindé",
      "Marota",
      "Repartida",
      "Graúna",
      "Azul",
      "Cariri",
      "Guanambi",
      "Jarmelista",
      "Somalis brasileira",
      "Anglo-bad",
      "Parda brasileira",
      "Serrana",
      "Seridó",
      "Borborema",
      "Campolina",
    ],
  },
  {
    icon: ICONS?.Gender,
    iconName: "Sexo",
    title: "Sexo",
    filters: ["Macho", "Fêmea"],
  },
  {
    icon: ICONS?.Date,
    iconName: "Data",
    title: "Idade",
    filters: ["Vaca", "Bezerro", "Garrote", "Novilha", "Aspiração"],
  },
  {
    icon: ICONS?.Quantity,
    iconName: "Quantidade",
    title: "Quantidade",
    filters: ["Unidade", "Lote"],
  },
];

export const BussinessHighlightProductMock: CardProductProps[] = [
  {
    id: 1,
    photo: IMAGES.GadoOne,
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
    id: 2,
    photo: IMAGES.GadoTwo,
    breed: "senepol",
    quantity: 3,
    name: "Garrote Himalaia",
    city: "Campina Grande",
    state: "Paraiba",
    country: "Brasil",
    sex: "Macho",
    age: "3 anos",
    rank: "Genética",
  },
  {
    id: 3,
    photo: IMAGES.GadoThree,
    breed: "senepol",
    quantity: 3,
    name: "Garrote Pegasus",
    city: "Campina Grande",
    state: "Paraiba",
    country: "Brasil",
    sex: "Macho",
    age: "3 anos",
    rank: "Genética",
  },
  {
    id: 4,
    photo: IMAGES.GadoFour,
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
    id: 5,
    photo: IMAGES.GadoFive,
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
    id: 6,
    photo: IMAGES.GadoSix,
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

export const tabs = [
  {
    title: "Principais buscas",
    content: "",
  },
  {
    title: "Classificação",
    content: "",
  },
  {
    title: "Genética",
    content: "",
  },
  {
    title: "Raça",
    content: "",
  },
  {
    title: "Sexo",
    content: "",
  },
];
export const Bussinestabs = [
  {
    title: "caprinos",
    content: "",
  },
  {
    title: "ovinos",
    content: "",
  },
];

export const MocksAbout = [
  {
    title: "Sobre nós",
    text: "Malesuada neque purus lobortis porta malesuada. Est tellus at mattis erat condimentum. Dui malesuada aenean pharetra sed. Magna ultrices interdum etiam eget dictum augue quam nec. Vel lacus egestas at mauris posuere vulputate varius ullamcorper. Dignissim sit donec ut adipiscing vel nunc",
    continuationText:
      "Facilisis eu magna suspendisse quis. At enim eget urna amet urna arcu. Nunc sit imperdiet elit urna vestibulum donec ut proin. Amet molestie platea libero lorem quam faucibus eu. Viverra diam justo sit accumsan bibendum volutpat. Mus molestie commodo volutpat feugiat quisque mauris mauris",
    helperText: "",
    image: "",
    image_mobile: "",
  },
  {
    title: "O que fazemos",
    text: "Conectamos compradores e vendedores de animais dos setores da capinocultura e ovinocultura. Oferecemos uma plataforma segura e fácil de usar para que você encontre animais de qualidade, consulte todas as informações que precisa e entre em contato pra fechar negócio",
  },
  {
    title: "Publique seus animais para venda",
    helperText:
      "Em três passos, você publica seus animais para outros produtores entrarem em contato",
    image: IMAGES.PrintPublishing,
    image_mobile: IMAGES.PrintPublishingMobile,
  },
  {
    title: "Entre em contato com quem vende",
    helperText: "Procure por bons negócios e consulte todas as informações que precisar",
    image: IMAGES.PrintProduct,
    image_mobile: IMAGES.PrintProductMobile,
  },
];

export const MocksSteps = [
  {
    pass: "Passo 1",
    value: "Informações",
  },
  {
    pass: "Passo 2",
    value: "Fotos e vídeos",
  },
  {
    pass: "Passo 3",
    value: "Localização",
  },
];

export const MockNavigation = [
  { name: "Início", link: "/" },
  { name: "Negócios", link: "/negocios" },
  { name: "Sobre nós", link: "/sobre" },
];

export const StepRegisterProduct = [
  {
    id: 1,
    name: "Informações",
    step: "Passo 1",
    component: RegisterInformation,
  },
  { id: 2, name: "Fotos", step: "Passo 2", component: RegisterPhotos },
  { id: 3, name: "Localização", step: "Passo 3", component: RegisterLocation },
];

export const TypeAnimal = ["Caprino", "Ovino"];

export const Caprino = [
  "SRD",
  "Boer",
  "Savannah",
  "Saanen",
  "Murciana",
  "Granadina",
  "Alpina",
  "Americana",
  "Parda",
  "Alpina",
  "Moxotó",
  "Canindé",
  "Kalahari",
  "Toggenburg",
  "Marota",
  "Anglo",
  "Nubiana",
];

export const Ovino = [
  "SRD",
  "Merino Australiano",
  "Ideal",
  "Corriedale",
  "Romney Marsh",
  " Hampshire Down",
  "Texel",
  " Ile de France",
  " Suffolk",
  "Karakul",
  " Lacaune",
  "  Santa Inês",
  "Morada Nova",
  "Bergamácia Brasileira",
  "Somális Brasileira",
  "Rabo Largo",
  "Border Leicester",
  "Poll Dorset",
  "Polypay",
  " Cariri",
  "Dorper",
  " Crioula",
  "Samm (South African)",
  " White Dorper",
  "East Friesian",
  "Dohne Merino",
];
