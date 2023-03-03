import { ICONS } from "@/assets";
import { BussinessHighlightProductMock } from "@/mock";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { ModalAnimal } from "../ModalAnimal";
import { PhotosAnimalMobile } from "../PhotosAnimalMobile";
import {
  CardSteps,
  Container,
  CurrentImage,
  ListPhotos,
  SeeMore,
} from "./style";

export const PhotosAnimal = () => {
  const [modal, setModal] = useState(false);
  const RestArray = BussinessHighlightProductMock.length - 5;
  const MinArray = BussinessHighlightProductMock.length;
  const allPhotos = BussinessHighlightProductMock;
  const [currentphoto, setCurrentPhoto] = useState(allPhotos[0].photo);

  const handleClick = (image: StaticImageData | any) => {
    setCurrentPhoto(image);
  };
  const handleModal = () => {
    setModal(!modal);
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
        {allPhotos.slice(0, 5).map((image, index) => (
          <li key={index} id={index === 4 && MinArray > 5 ? "see-more" : ""}>
            <Image
              onClick={() => handleClick(image.photo)}
              src={image.photo}
              alt="imagem do animal"
            />
          </li>
        ))}
        {MinArray > 5 && <SeeMore onClick={handleModal}>{RestArray}</SeeMore>}
      </ListPhotos>
      <PhotosAnimalMobile />
      {modal && <ModalAnimal handleModal={handleModal} />}
    </Container>
  );
};
