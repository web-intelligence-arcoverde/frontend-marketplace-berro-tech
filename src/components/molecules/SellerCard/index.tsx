import { IMAGES } from "@/assets";
import { CardNameLocation, CardContact } from "@/components";
import React from "react";
import {  Container, ImageSeller } from "./style";

const SellerCard = () => {
  return (
    <Container>
      <ImageSeller src={IMAGES.Seller} alt="imagem do vendedor" />
      <CardNameLocation
        isAvaliation
        name={"Brenno Guedes"}
        city={"Campina Grande"}
        state={"Paraíba"}
        country={"Brasil"}
      />
      <CardContact />
    </Container>
  );
};

export default SellerCard;
