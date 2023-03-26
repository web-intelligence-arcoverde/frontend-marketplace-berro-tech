import Image from "next/image";
import { Card, CattleCard, Flex, CattleInfoContainer } from "./style";
import { CardProductProps } from "@/types";
import { CardNameLocation } from "@/components";

export const ProductCard = ({
  name,
  photo,
  breed,
  quantity,
  state,
  city,
  age,
  sex,
  rank,
  maxWidth,
}: CardProductProps) => {
  return (
    <Card maxWidth={maxWidth}>
      {photo && <Image src={photo} alt={`foto de um ${breed}`} />}
      <Flex>
        <p>{breed}</p>
        <h6>
          {quantity} <span>{quantity > 1 ? "restantes" : "restante"}</span>
        </h6>
      </Flex>
      <CardNameLocation name={name} city={city} state={state} age={age} />
      <CattleInfoContainer>
        <CattleCard>
          <h5>Sexo</h5>
          <h6>{sex}</h6>
        </CattleCard>
        <CattleCard>
          <h5>Idade</h5>
          <h6>{age}</h6>
        </CattleCard>
        <CattleCard>
          <h5>Classficado</h5>
          <h6>{rank}</h6>
        </CattleCard>
      </CattleInfoContainer>
    </Card>
  );
};
