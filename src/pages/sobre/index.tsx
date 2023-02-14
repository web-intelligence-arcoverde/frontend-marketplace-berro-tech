import { ICONS, IMAGES } from "@/assets";
import { Footer, Header, LayoutSection } from "@/components";
import { MocksAbout } from "@/mock";
import { Main, Container } from "@/style";
import Image from "next/image";
import { ContainerPresentation, Presentation, StyleImage } from "./style";
const About = () => {
  return (
    <Container>
      <Main>
        <Header />
        <Presentation>
          <ContainerPresentation>
            <h1>
              Uma plataforma onde você pode comprar e vender caprinos e ovinos
              de forma segura e sem burocracia
            </h1>
            <h6>
              Somos a &nbsp; <strong>berro</strong>tech
              <Image src={ICONS.Hands} alt="mãos" />
            </h6>
          </ContainerPresentation>

          <StyleImage src={IMAGES.ManField} alt="homem no campo" />
        </Presentation>
        {MocksAbout.map((section, index) => (
          <LayoutSection
            key={index}
            title={section?.title}
            changeSide={index % 2 === 0}
            helperText={section?.helperText}
            direction={index > 1 ? true : false}
          >
            {section?.image && <Image src={section?.image} alt="print" />}
            {section?.text}
            {section?.continuationText}
            
          </LayoutSection>
        ))}
        <Footer />
      </Main>
    </Container>
  );
};

export default About;
