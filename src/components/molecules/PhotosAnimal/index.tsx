import {Breadcrumb, SlideProduct} from '@/components';
import Image, {StaticImageData} from 'next/image';
import {useState} from 'react';
import {PhotosAnimalMobile} from '../PhotosAnimalMobile';
import {Container, CurrentImage, ListPhotos, SeeMore} from './style';

import {IDocument} from '@/types/ICardProductProps';

export const PhotosAnimal = ({arrayPhoto}: any) => {
  const [modal, setModal] = useState(false);
  const restPhotos = arrayPhoto?.length - 5;
  const minPhotos = arrayPhoto?.length;

  const [currentPhoto, setCurrentPhoto] = useState(arrayPhoto[0].url);

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
        src={currentPhoto}
        alt='imagem atual'
      />
      <ListPhotos>
        {arrayPhoto?.slice(0, 5).map((image: IDocument, index: number) => (
          <li key={index} id={index === 4 && minPhotos > 5 ? 'see-more' : ''}>
            <Image
              width={500}
              height={500}
              onClick={() => handleClick(image?.url)}
              src={image?.url}
              alt='imagem do animal'
            />
          </li>
        ))}
        {minPhotos > 5 && <SeeMore onClick={handleModal}>{restPhotos}</SeeMore>}
      </ListPhotos>
      <PhotosAnimalMobile allPhotos={arrayPhoto} />
      {modal && (
        <SlideProduct allPhotos={arrayPhoto} handleModal={handleModal} />
      )}
    </Container>
  );
};
