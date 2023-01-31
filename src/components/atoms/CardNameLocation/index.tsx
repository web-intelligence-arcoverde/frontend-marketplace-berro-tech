import React from "react";
import Image from "next/image";
import { ICONS } from "@/assets";
import { Location ,Flex } from "./style";
import { CardNameLocationProps } from "@/types";

const CardNameLocation = ({name, city ,state,country}:CardNameLocationProps) => {
  return (
    <div>
      <Flex>
        <h4>{name}</h4>
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

export default CardNameLocation