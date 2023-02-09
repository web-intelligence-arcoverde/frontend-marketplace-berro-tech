import Image from 'next/image';
import {Card, CardContainer, Flex, LastContainer} from './style';
import {CardProductProps} from '@/types';

export const ProductCard = ({
  name,
  photo,
  breed,
  quantity,
  country,
  state,
  city,
  age,
  sex,
  rank,
}: CardProductProps) => {
  return (
    <Card>
      <Image src={photo} alt={`foto de um${breed}`} />
      <Flex>
        <p>{breed}</p>
        <h6>
          {quantity} <span>{quantity > 1 ? 'restantes' : 'restante'}</span>
        </h6>
      </Flex>
      {/* <CardNameLocation name={name} city={city} state={state} country={country} /> */}
      <LastContainer>
        <CardContainer>
          <h5>Sexo</h5>
          <h6>{sex}</h6>
        </CardContainer>
        <CardContainer>
          <h5>Idade</h5>
          <h6>{age}</h6>
        </CardContainer>
        <CardContainer>
          <h5>Classfica...</h5>
          <h6>{rank}</h6>
        </CardContainer>
      </LastContainer>
    </Card>
  );
};
