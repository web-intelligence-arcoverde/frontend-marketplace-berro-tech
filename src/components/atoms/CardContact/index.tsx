import { Container } from "./style";
import Image from "next/image";
import { ICONS } from "@/assets/icons";
import { CardContactProps } from "@/types";
import { Button } from "@/components";

export const CardContact = ({ link, onClickDots }: CardContactProps) => {
  return (
    <Container>
      <a href={link}>
        <Image src={ICONS.Whatsapp} alt="Icone whatsapp" />
        Entrar em contato
      </a>
      <Button onClick={() => onClickDots}>
        <Image src={ICONS.ShareDots} alt="Icone compartilhar" />
      </Button>
    </Container>
  );
};
