import { ModalAnimal } from "@/components";
import { BussinessHighlightProductMock } from "@/mock";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { PhotosAnimalMobile } from "../PhotosAnimalMobile";
import { Container, CurrentImage, ListPhotos, SeeMore } from "./style";

export const PhotosAnimal = () => {
  const [modal, setModal] = useState(false);
  const RestArray = BussinessHighlightProductMock.length - 5;
  const MinArray = BussinessHighlightProductMock.length;
  const allPhotos = BussinessHighlightProductMock;
  const [currentphoto, setCurrentPhoto] = useState(
    BussinessHighlightProductMock[0].photo
  );

  const handleClick = (image: StaticImageData | any) => {
    setCurrentPhoto(image);
  };
  const handleModal = () => {
    setModal(!modal);
  };
  console.log(allPhotos);

  return (
    <Container>
      <CurrentImage src={currentphoto} alt="imagem atual" />
      <ListPhotos>
        {allPhotos.slice(0, 5).map(( image, index) => (
          <li key={index} id={index === 4 && MinArray > 5 ? "see-more" : ""}>
            <Image
              onClick={() => handleClick(image?.photo)}
              src={image?.photo}
              alt="imagem do animal"
            />
          </li>
        ))}
        {MinArray > 5 && <SeeMore onClick={handleModal}>{RestArray}</SeeMore>}
      </ListPhotos>
      <PhotosAnimalMobile allPhotos={allPhotos} />
      {modal && <ModalAnimal allPhotos={allPhotos} handleModal={handleModal} />}
    </Container>
  );
};
