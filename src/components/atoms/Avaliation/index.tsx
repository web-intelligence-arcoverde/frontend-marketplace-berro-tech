import { ICONS } from "@/assets";
import { AvaliationProps } from "@/types";
import Image from "next/image";
import { Container } from "./style";

export const Avaliation = ({ avaliation }: AvaliationProps) => {
  return (
    <Container>
      <h5>{avaliation}</h5>
      <Image src={ICONS.FullStar} alt="icone de localização" />
    </Container>
  );
};
