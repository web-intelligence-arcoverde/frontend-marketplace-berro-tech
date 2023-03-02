import { ICONS } from "@/assets";
import { BussinessHighlightProductMock } from "@/mock";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { CardSteps, Container, CurrentImage,ListPhotos } from "./style";

export const PhotosAnimal = () => {

const [currentphoto,setCurrentPhoto] = useState(BussinessHighlightProductMock[0].photo)

const handleClick = (image:StaticImageData | any) => {
  setCurrentPhoto(image);
};

  return (
    <Container>
      <CardSteps>
        <li>Minhas pulblicações</li>
        <Image src={ICONS.ArrowRight} alt="seta direta" />
        <li>Caprinos</li>
        <Image src={ICONS.ArrowRight} alt="seta direta" />
        <li>Garrote Senepol</li>
      </CardSteps>

      <CurrentImage src={currentphoto} alt="imagem atual" />
      <ListPhotos>
        {BussinessHighlightProductMock.slice(0,5).map((image, index) => (
          <li key={index} onClick={() => handleClick(image.photo)}>
            <Image src={image.photo} alt="imagem do animal" />
          </li>
        ))}
      </ListPhotos>
    </Container>
  );
};
