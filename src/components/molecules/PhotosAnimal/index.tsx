import { Breadcrumb, SlideProduct } from "@/components";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { PhotosAnimalMobile } from "../PhotosAnimalMobile";
import { Container, CurrentImage, ListPhotos, SeeMore } from "./style";

import { useAppSelector } from "@/hooks/useSelectorHook";
import { IDocument } from "@/types/ICardProductProps";

export const PhotosAnimal = (arrayPhoto: any) => {
  const [modal, setModal] = useState(false);
  const allPhotos = arrayPhoto.arrayPhoto;
  const RestPhotos = allPhotos?.length - 5;
  const MinPhotos = allPhotos?.length;
  const FirstLoadingPhoto = useAppSelector(
    (state) => state.product.currentPhoto
  );
  const [currentphoto, setCurrentPhoto] = useState(FirstLoadingPhoto);

  useEffect(() => {
    setCurrentPhoto(FirstLoadingPhoto);
  }, [FirstLoadingPhoto]);

  const handleClick = (image: StaticImageData | any) => {
    setCurrentPhoto(image);
  };
  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <Container>
      <Breadcrumb />
      <CurrentImage
        width={500}
        height={500}
        src={currentphoto}
        alt="imagem atual"
      />
      <ListPhotos>
        {allPhotos?.slice(0, 5).map((image: IDocument, index: number) => (
          <li key={index} id={index === 4 && MinPhotos > 5 ? "see-more" : ""}>
            <Image
              width={500}
              height={500}
              onClick={() => handleClick(image?.url)}
              src={image?.url}
              alt="imagem do animal"
            />
          </li>
        ))}
        {MinPhotos > 5 && <SeeMore onClick={handleModal}>{RestPhotos}</SeeMore>}
      </ListPhotos>
      <PhotosAnimalMobile allPhotos={allPhotos} />
      {modal && (
        <SlideProduct allPhotos={allPhotos} handleModal={handleModal} />
      )}
    </Container>
  );
};
