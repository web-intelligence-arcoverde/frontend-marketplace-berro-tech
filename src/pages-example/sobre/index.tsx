import React from "react";

import { ICONS, IMAGES } from "@/assets";
import { Footer, Header, LayoutSection } from "@/components";
import { MocksAbout } from "@/mock";
import { Main, Container } from "@/style";
import Image from "next/image";
import {
  ContainerPresentation,
  Presentation,
  StyleImage,
  ListSections,
  PrintImage,
  PrintImageMobile,
  StyledImageMobile,
} from "../../style/sobre-styles";

const About = () => {
  return (
    <Container>
      <Header />
      <Main>
        <Presentation>
          <ContainerPresentation>
            <h1>
              Uma plataforma onde você pode comprar e vender caprinos e ovinos
              de forma segura e sem burocracia
            </h1>

            <h6>
              <span> Somos a &nbsp;</span> <strong>berro</strong>tech
              <Image src={ICONS.Hands} alt="mãos" />
            </h6>
          </ContainerPresentation>

          <StyleImage
            objectFit="contain"
            src={IMAGES.ManField}
            alt="homem no campo"
          />
          <StyledImageMobile
            objectFit="contain"
            src={IMAGES.ManFieldMobile}
            alt="homem no campo"
          />
        </Presentation>
        <ListSections>
          {MocksAbout.map((section, index) => (
            <LayoutSection
              key={index}
              title={section?.title}
              helperText={section?.helperText}
            >
              {section?.image && (
                <PrintImage src={section?.image} alt="print" />
              )}
              {section?.image && (
                <PrintImageMobile src={section?.image_mobile} alt="print" />
              )}
              {section?.text}
              {section?.continuationText}
            </LayoutSection>
          ))}
        </ListSections>
      </Main>
      <Footer />
    </Container>
  );
};

export default About;
