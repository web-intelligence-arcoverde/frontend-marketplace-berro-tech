import { IMAGES } from "@/assets";
import Image from "next/image";
import { DescriptionPresentation, Intro, StyledImage } from "./style";

const Presentation = () => {
  return (
    <Intro>
      <DescriptionPresentation>
        <h6>COMPRE E VENDA</h6>
        <h1>A melhor experiência em compra e venda de Caprinos e Ovinos</h1>
        <p>
          Encontre facilmente caprinos e ovinos. Consulte informações claras com
          tranquilidade e segurança.
        </p>
      </DescriptionPresentation>
      <StyledImage src={IMAGES.BovinoPresentation} alt="imagem do bovino" />
    </Intro>
  );
};

export default Presentation;
