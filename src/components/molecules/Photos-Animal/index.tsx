import { ICONS } from "@/assets";
import { BussinessHighlightProductMock } from "@/mock";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import {
  CardSteps,
  Container,
  CurrentImage,
  ListPhotos,
  SeeMore,
} from "./style";

export const PhotosAnimal = () => {
  const [currentphoto, setCurrentPhoto] = useState(
    BussinessHighlightProductMock[0].photo
  );
  const RestArray = BussinessHighlightProductMock.length - 5;

  const handleClick = (image: StaticImageData | any) => {
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
        {BussinessHighlightProductMock.slice(0, 5).map((image, index) => (
          <li key={index} id={index === 4 ? "see-more" : ""}>
            <Image
              onClick={() => handleClick(image.photo)}
              src={image.photo}
              alt="imagem do animal"
            />
          </li>
        ))}
        {BussinessHighlightProductMock.length > 5 && (
          <SeeMore>{RestArray}</SeeMore>
        )}
      </ListPhotos>
    </Container>
  );
};
