import React from 'react';
import {CardsContainer, Container, ImageArrowDown} from './style';
import {ICONS} from '@/assets';
import {PresentationInfoCard} from '@/components';

export const PresentationInfo = () => {
  const PresentationInfoCardMock = [
    {
      icon: ICONS?.Search,
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

  return (
    <Container>
      <ImageArrowDown src={ICONS.ArrowDown} alt={'Icone seta para baixo'} />
      <CardsContainer>
        {PresentationInfoCardMock?.map((item, index) => (
          <PresentationInfoCard
            key={index}
            icon={item?.icon}
            iconName={item?.iconName}
            title={item?.title}
            description={item?.description}
          />
        ))}
      </CardsContainer>
    </Container>
  );
};
