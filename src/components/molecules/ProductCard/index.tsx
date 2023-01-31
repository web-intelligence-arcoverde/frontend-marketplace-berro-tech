import Image from "next/image";
import { Card, CardContainer, Flex, LastContainer, Location } from "./style";
import { ICONS } from "@/assets";
import { CardProps } from "@/types";

const ProductCard= ({name,photo,breed,quantity,country,state,city,age,sex,rank}:CardProps) => {
  return (
    <Card>
      <Image src={photo} alt={`foto de um${breed}`} />
      <Flex>
        <p>{breed}</p>
        <h6>
          {quantity}{" "}
          <span>{quantity > 1 ? "restantes" : "restante"}</span>
        </h6>
      </Flex>
      <Flex>
        <h4>{name}</h4>
      </Flex>
      <Flex>
        <Location>
          {" "}
          <Image src={ICONS.Location} alt="icone de localização" />
          {city}, {state},{" "}
          {country}
        </Location>
      </Flex>

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

export default ProductCard;
