import { IMAGES } from "@/assets";
import { CardContact, CardNameLocation } from "@/components";
import React from "react";
import { Container, ImageSeller } from "./style";

export const SellerCard = () => {
  return (
    <Container>
      <ImageSeller src={IMAGES.Seller} alt="imagem do vendedor" />
      <CardNameLocation isAvaliation name={"Brunno guedes"} city={"Campina Grande"} state={"paraiba"} country={"pe"}/>
        
      <CardContact />
    </Container>
  );
};
