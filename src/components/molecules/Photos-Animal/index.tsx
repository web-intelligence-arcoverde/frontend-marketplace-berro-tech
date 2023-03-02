import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";
import { CardSteps, Container, CurrentImage } from "./style";

export const PhotosAnimal = () => {
  return (
    <Container>
      <CardSteps>
        <li>Minhas pulblicações</li>
        <Image src={ICONS.ArrowRight} alt="seta direta" />
        <li>Caprinos</li>
        <Image src={ICONS.ArrowRight} alt="seta direta" />
        <li>Garrote Senepol</li>
      </CardSteps>

      <CurrentImage src={IMAGES.GadoFour} alt="imagem atual" />
      <div>
        <h5>imagem 1</h5>
        <h5>imagem 2</h5>
        <h5>imagem 3</h5>
        <h5>imagem 4</h5>
        <h5>imagem 5</h5>
      </div>
    </Container>
  );
};
