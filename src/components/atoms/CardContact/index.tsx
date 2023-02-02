import React from "react";
import Button from "../Button";
import { Container } from "./style";
import Image from "next/image";
import { ICONS } from "@/assets/icons";

const CardContact = () => {
  return (
    <Container>
      <a className="contat-button">
        <Image src={ICONS.Whatsapp} alt="Icone whatsapp" />
        Entrar em contato
      </a>
      <Button className="share-button" onClick={(): void => {}}>
        <Image src={ICONS.ShareDots} alt="Icone compartilhar" />
      </Button>
    </Container>
  );
};

export default CardContact;
