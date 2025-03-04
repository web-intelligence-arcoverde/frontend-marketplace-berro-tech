import { ICONS, IMAGES } from '@/assets';


import RegisterInformation from '@/components/molecules/RegisterInformation';
import RegisterLocation from '@/components/molecules/RegisterLocation';
import { RegisterPhotos } from '@/components/molecules/RegisterPhotos';


export const NavigationHeader = [
  { name: 'favorito', icon: ICONS.Star },
  { name: 'mensagens', icon: ICONS.Message },
  { name: 'alerta', icon: ICONS.Alert },
];
export const DropdownMock = ['Mais Recentes', 'Mais Antigos'];

export const PresentationInfoCardMock = [
  {
    icon: ICONS?.SearchBlue,
    iconName: 'procura',
    title: 'Encontre animais',
    description: 'Busque por caprinos e ovinos',
  },
  {
    icon: ICONS?.Document,
    iconName: 'Documento',
    title: 'Consulte as informações',
    description: 'De cada produto facilmente',
  },
  {
    icon: ICONS?.Phone,
    iconName: 'telefone',
    title: 'Entre em contato',
    description: 'E negocie com o vendedor',
  },
];
export const BusinessFiltersMock = [
  {
    icon: ICONS?.LocationGray,
    iconName: 'localização',
    title: 'Estado',
    filters: [
      'Acre',
      'Alagoas',
      'Amapá',
      'Amazonas',
      'Bahia',
      'Ceará',
      'Distrito Federal',
      'Espírito Santo',
      'Goiás',
      'Maranhão',
      'Mato Grosso',
      'Mato Grosso do Sul',
      'Minas Gerais',
      'Pará',
      'Paraíba',
      'Paraná',
      'Pernambuco',
      'Piauí',
      'Rio de Janeiro',
      'Rio Grande do Norte',
      'Rio Grande do Sul',
      'Rondônia',
      'Roraima',
      'Santa Catarina',
      'São Paulo',
      'Sergipe',
      'Tocantins',
    ],
  },
  {
    icon: ICONS?.Classification,
    iconName: 'Classificação',
    title: 'Classificação',
    filters: ['Puro de origem', 'Puro de avaliação', 'Puro de cruzamento', 'Reposição'],
  },
  {
    icon: ICONS?.Race,
    iconName: 'Raça',
    title: 'Raça',
    filters: [
      'Boer',
      'Savanna',
      'Anglo Nubiano',
      'Murciana',
      'Saanen',
      'Parda Alpina',
      'Alpina Americana',
      'Toggenburg',
      'Dorper',
      'White Dorper',
      'Poll Dorset',
      'Santa Inês',
      'Somalis',
      'Morada Nova',
      'Cariri',
      'SRD (Sem raça definida)',
      'Outros',
    ],
  },
  {
    icon: ICONS?.Gender,
    iconName: 'Sexo',
    title: 'Sexo',
    filters: ['Macho', 'Fêmea'],
  },
  {
    icon: ICONS?.Date,
    iconName: 'Data',
    title: 'Idade',
    filters: ['Jovem', 'Adulto'],
  },
  {
    icon: ICONS?.Quantity,
    iconName: 'Quantidade',
    title: 'Quantidade',
    filters: ['Unidade', 'Lote'],
  },
];



export const tabs = [
  {
    title: 'Principais buscas',
    typeFilter: 'top',
  },
  {
    title: 'Classificação',
    typeFilter: 'rank',
  },
  {
    title: 'Raça',
    typeFilter: 'breed',
  },
  {
    title: 'Sexo',
    typeFilter: 'sex',
  },
];
export const Bussinestabs = [
  {
    title: 'Caprinos',
  },
  {
    title: 'Ovinos',
  },
];

export const MocksAbout = [
  {
    title: 'Sobre nós',
    text: 'Malesuada neque purus lobortis porta malesuada. Est tellus at mattis erat condimentum. Dui malesuada aenean pharetra sed. Magna ultrices interdum etiam eget dictum augue quam nec. Vel lacus egestas at mauris posuere vulputate varius ullamcorper. Dignissim sit donec ut adipiscing vel nunc',
    continuationText:
      'Facilisis eu magna suspendisse quis. At enim eget urna amet urna arcu. Nunc sit imperdiet elit urna vestibulum donec ut proin. Amet molestie platea libero lorem quam faucibus eu. Viverra diam justo sit accumsan bibendum volutpat. Mus molestie commodo volutpat feugiat quisque mauris mauris',
    helperText: '',
    image: '',
    image_mobile: '',
  },
  {
    title: 'O que fazemos',
    text: 'Conectamos compradores e vendedores de animais dos setores da capinocultura e ovinocultura. Oferecemos uma plataforma segura e fácil de usar para que você encontre animais de qualidade, consulte todas as informações que precisa e entre em contato pra fechar negócio',
  },
  {
    title: 'Publique seus animais para venda',
    helperText:
      'Em três passos, você publica seus animais para outros produtores entrarem em contato',
    image: IMAGES.PrintPublishing,
    image_mobile: IMAGES.PrintPublishingMobile,
  },
  {
    title: 'Entre em contato com quem vende',
    helperText:
      'Procure por bons negócios e consulte todas as informações que precisar',
    image: IMAGES.PrintProduct,
    image_mobile: IMAGES.PrintProductMobile,
  },
];

export const MocksSteps = [
  {
    pass: 'Passo 1',
    value: 'Informações',
  },
  {
    pass: 'Passo 2',
    value: 'Fotos e vídeos',
  },
  {
    pass: 'Passo 3',
    value: 'Localização',
  },
];

export const MockNavigation = [
  { name: 'Início', link: '/' },
  { name: 'Negócios', link: '/negocios' },
  { name: 'Sobre nós', link: '/sobre' },
];

export const StepRegisterProduct = [
  { id: 1, name: 'Informações', step: 'Passo 1', component: RegisterInformation },
  { id: 2, name: 'Fotos', step: 'Passo 2', component: RegisterPhotos },
  { id: 3, name: 'Localização', step: 'Passo 3', component: RegisterLocation },
];

export const regionMock = [
  {
    region: 'Centro-Oeste',
    colorBackground: 'rgba(255, 140, 77, 0.05)',
    colorIcon: '#FF8C4D',
    description:
      'Possui uma vasta área de pastagem que propicia a criação de maneira intensiva',
  },
  {
    region: 'Sul',
    colorBackground: ' rgba(77, 122, 209, 0.05)',
    colorIcon: '#4D7AD1',
    description:
      'Com destaque pro estado do Rio Grande do Sul, é uma das principais regiões',
  },
  {
    region: 'Sudeste',
    colorBackground: 'rgba(255, 203, 4, 0.05)',
    colorIcon: '#FFCB04',
    description:
      'Com uma vasta rede de comercialização de pequenos e médios produtores',
  },
  {
    region: 'Nordeste',
    colorBackground: 'rgba(250, 92, 92, 0.05)',
    colorIcon: '#FA5C5C',
    description:
      'Conhecida pela diversidade de raças, o que aumenta a variedade de ofertas',
  },
  {
    region: 'Norte',
    colorBackground: 'rgba(64, 143, 112, 0.05)',
    colorIcon: '#408F70',
    description:
      'Região de crescimento exponencial com mais produtores de médio porte',
  },
];
