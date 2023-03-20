import React from "react";
import Image from "next/image";
import {
  ProductSellerContainer,
  DescriptionContainer,
  ImageContainer,
  InfoCard,
  DescriptionCard,
  NameAvaliation,
  LinkContainer,
  SellerLink,
  InfoCardToMobile,
  TitleToMobile,
  AvaliationBorderToMobile,
} from "./style";
import { IMAGES } from "@/assets";
import { Avaliation } from "@/components";
import { StyleDesktop, StyleMobile } from "@/style";

export const ProductSellerCard = () => {
  return (
    <ProductSellerContainer>
          <StyleMobile>
            <TitleToMobile>
              <h3>Perfil do vendedor</h3>
            </TitleToMobile>
          </StyleMobile>
      <DescriptionContainer>
        <InfoCard>
          <StyleDesktop>
            <h3>Perfil do vendedor</h3>
          </StyleDesktop>
          <InfoCardToMobile>
            <DescriptionCard>
                <h6>nome</h6>
                <NameAvaliation>
                  <p>Brenno Guedes</p>
                  <StyleDesktop>
                    <Avaliation avaliation="4.8" />
                  </StyleDesktop>
                </NameAvaliation>
            </DescriptionCard>
            <DescriptionCard>
              <h6>Localização</h6>
              <p>Campina grande, Paraíba, Brasil</p>
            </DescriptionCard>
          </InfoCardToMobile>
          <StyleMobile>
            <ImageContainer>
             <Image src={IMAGES.Seller} alt="imagem do vendedor" />
            </ImageContainer>
          </StyleMobile>
        </InfoCard>
        <StyleDesktop>
          <LinkContainer>
            <SellerLink href="/negocios/produto/perfil-vendedor/1">
              Ver mais
            </SellerLink>
          </LinkContainer>
        </StyleDesktop>
      </DescriptionContainer>
        <StyleMobile>
          <LinkContainer>
            <SellerLink href="/negocios/produto/perfil-vendedor/1">
              Ver mais
            </SellerLink>
            <AvaliationBorderToMobile>
              <Avaliation avaliation="4.8" />
            </AvaliationBorderToMobile>
          </LinkContainer>
        </StyleMobile>
      <StyleDesktop>
        <ImageContainer>
          <Image src={IMAGES.Seller} alt="imagem do vendedor" />
        </ImageContainer>
      </StyleDesktop>
    </ProductSellerContainer>
  );
};
