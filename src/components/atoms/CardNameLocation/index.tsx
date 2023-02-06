import React from "react";
import Image from "next/image";
import { ICONS } from "@/assets";
import { Location, Flex } from "./style";
import { CardNameLocationProps } from "@/types";
import { Avaliation } from "@/components";

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
        {isAvaliation && <Avaliation avaliation="4.8" />}
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
