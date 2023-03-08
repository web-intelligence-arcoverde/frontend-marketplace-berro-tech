import { Breadcrumb, ModalAnimal } from "@/components";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { PhotosAnimalMobile } from "../PhotosAnimalMobile";
import { Container, CurrentImage, ListPhotos, SeeMore } from "./style";

export const PhotosAnimal = (arrayPhoto: any) => {
  const [modal, setModal] = useState(false);
  const allPhotos = arrayPhoto.arrayPhoto;
  const RestPhotos = allPhotos.length - 5;
  const MinPhotos = allPhotos.length;
  const [currentphoto, setCurrentPhoto] = useState(allPhotos[0].photo);

  const handleClick = (image: StaticImageData | any) => {
    setCurrentPhoto(image);
  };
  const handleModal = () => {
    setModal(!modal);
  };
  useEffect(() => {
    const body = document.querySelector("body");
    if (modal && body) {
      body.classList.add("modal-open");
    }
    return () => {
      if (body) {
        body.classList.remove("modal-open");
      }
    };
  }, [modal]);

  return (
    <Container>
      <Breadcrumb />
      <CurrentImage src={currentphoto} alt="imagem atual" />
      <ListPhotos>
        {allPhotos.slice(0, 5).map((image: any, index: number) => (
          <li key={index} id={index === 4 && MinPhotos > 5 ? "see-more" : ""}>
            <Image
              onClick={() => handleClick(image?.photo)}
              src={image?.photo}
              alt="imagem do animal"
            />
          </li>
        ))}
        {MinPhotos > 5 && <SeeMore onClick={handleModal}>{RestPhotos}</SeeMore>}
      </ListPhotos>
      <PhotosAnimalMobile allPhotos={allPhotos} />
      {modal && <ModalAnimal allPhotos={allPhotos} handleModal={handleModal} />}
    </Container>
  );
};
