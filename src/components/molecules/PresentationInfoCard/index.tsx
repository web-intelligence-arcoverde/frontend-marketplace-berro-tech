import {Container, Figure, StyledImage, TextContainer} from './style';
import {PresentationInfoCardProps} from '@/types';

export const PresentationInfoCard = ({
  icon,
  iconName,
  title,
  description,
}: PresentationInfoCardProps) => {
  return (
    <Container>
      <Figure>
        <StyledImage src={icon} alt={`icone de ${iconName}`} />
      </Figure>
      <TextContainer>
        <h5>{title}</h5>
        <p>{description}</p>
      </TextContainer>
    </Container>
  );
};
