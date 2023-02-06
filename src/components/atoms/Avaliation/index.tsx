import { ICONS } from "@/assets";
import { AvaliationProps } from "@/types";
import Image from "next/image";
import React from "react";

import { Container } from "./style";

const Avaliation = ({avaliation}:AvaliationProps) => {
  return (
    <Container>
      <h5>{avaliation}</h5>
      <Image src={ICONS.FullStar} alt="icone de localização" />
    </Container>
  );
};

export default Avaliation;
