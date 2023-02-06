import { ICONS, IMAGES } from "@/assets";
import { Button, CardNameLocation } from "@/components";
import Image from "next/image";
import React from "react";
import { ContactContainer, Container } from "./style";

const SellerCard = () => {
  return (
    <Container>
      <Image
        className="img-Seller"
        src={IMAGES.Seller}
        alt="imagem do vendedor"
      />
      <CardNameLocation
        name={"Brenno Guedes"}
        city={"Campina Grande"}
        state={" Paraíba"}
        country={"Brasil"}
      />
      <ContactContainer>
        <Button className="contat-button" onClick={(): void => {}}>
          <Image src={ICONS.Whatsapp} alt="Icone whatsapp" />
          Entrar em contato
        </Button>
        <Button className="share-button" onClick={(): void => {}}>
          <Image src={ICONS.ShareDots} alt="Icone compartilhar" />
        </Button>
      </ContactContainer>
    </Container>
  );
};

export default SellerCard;
