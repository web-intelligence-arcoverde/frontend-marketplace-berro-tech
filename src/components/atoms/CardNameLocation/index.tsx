import React from "react";
import Image from "next/image";
import { ICONS } from "@/assets";
import { Location, Flex, AvaliationContainer } from "./style";
import { CardNameLocationProps } from "@/types";

const CardNameLocation = ({
  name,
  city,
  state,
  country,
  isAvaliation,
}: CardNameLocationProps) => {
  return (
    <div>
      <Flex>
        <h4>{name}</h4>
        {isAvaliation && (
          <AvaliationContainer>
            <h5>4.8</h5>
            <Image src={ICONS.FullStar} alt="icone de localização" />
          </AvaliationContainer>
        )}
      </Flex>
      <Flex>
        <Location>
          <Image src={ICONS.Location} alt="icone de localização" />
          {city}, {state}, {country}
        </Location>
      </Flex>
    </div>
  );
};

export default CardNameLocation;
