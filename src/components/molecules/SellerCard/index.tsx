import { ICONS } from "@/assets";
import { CardContact, CardNameLocation } from "@/components";
import React from "react";
import { Container, ImageSeller } from "./style";
import { useAppSelector } from "@/hooks/useSelectorHook";

export const SellerCard = () => {
  const avatar = useAppSelector((state)=>state.auth.user.avatar_url)
  return (
    <Container>
      <ImageSeller
        src={!!avatar ? avatar : ICONS.Avatar}
        alt="imagem do vendedor"
      />
      <CardNameLocation     
        name={"Brunno guedes"}
        city={"Campina Grande"}
        state={"paraiba"}
      />
      <CardContact />
    </Container>
  );
};
