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
import { useRouter } from "next/router";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export const ProductSellerCard = () => {
  const router = useRouter()
  const isMobile = !useMediaQuery("md");
  const handleRedirect = () => {
    router.push(`/negocios/perfil-vendedor/${1}`)
  }

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
                  {/* <Avaliation avaliation="4.8" /> */}
                </StyleDesktop>
              </NameAvaliation>
            </DescriptionCard>
            <DescriptionCard>
              <h6>Localização</h6>
              <p>Campina grande, PB</p>
            </DescriptionCard>
          </InfoCardToMobile>
          {isMobile &&
            <ImageContainer>
              <Image src={IMAGES.Seller} alt="imagem do vendedor" />
            </ImageContainer>
          }
        </InfoCard>
        <StyleDesktop>
          <LinkContainer>
            <SellerLink onClick={handleRedirect}>
              Ver mais
            </SellerLink>
          </LinkContainer>
        </StyleDesktop>
      </DescriptionContainer>
      <StyleMobile>
        <LinkContainer>
          <SellerLink onClick={handleRedirect}>
            Ver mais
          </SellerLink>
          {/* <AvaliationBorderToMobile>
              <Avaliation avaliation="4.8" />
            </AvaliationBorderToMobile> */}
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
