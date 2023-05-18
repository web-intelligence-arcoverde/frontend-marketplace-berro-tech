import { Breadcrumb, SlideProduct } from '@/components';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import { PhotosAnimalMobile } from '../PhotosAnimalMobile';
import { Container, CurrentImage, ListPhotos, SeeMore } from './style';

import { IDocument } from '@/types/ICardProductProps';

export const PhotosAnimal = ({ arrayPhoto }: any) => {
  const [modal, setModal] = useState(false);
  const restPhotos = arrayPhoto?.length - 5;
  const minPhotos = arrayPhoto?.length;

  const [currentPhoto, setCurrentPhoto] = useState(arrayPhoto[0].url);
  let currentFileType = currentPhoto.split('.').reverse()[0]

  const handleClick = (image: StaticImageData | any) => {
    setCurrentPhoto(image);
  };

  const handleModal = () => {
    setModal(!modal);
  };



  const renderCurrentFile = () => {
    if (currentFileType === 'mp4') {
      return (
        <video autoPlay loop style={{ width: '694px', height: '400px' }} controls >
          <source src={currentPhoto} />
        </video>
      )
    } else {
      return (
        <CurrentImage
          width={600}
          height={600}
          src={currentPhoto}
          alt='imagem atual'
        />
      )
    }


  }

  return (
    <Container>
      <Breadcrumb />
      {renderCurrentFile()}
      <ListPhotos>
        {arrayPhoto?.slice(0, 5).map((image: IDocument, index: number) => {
          let typeFile = image.url.split('.').reverse()[0]

          const renderFile = () => {
            if (typeFile === 'mp4') {
              return (
                <video autoPlay loop style={{ width: '120px', height: '100px' }} onClick={() => handleClick(image?.url)}>
                  <source src={image?.url} />
                </video>
              )
            } else {
              return (
                <Image
                  width={500}
                  height={500}
                  onClick={() => handleClick(image?.url)}
                  src={image?.url}
                  alt='imagem do animal'
                />
              )
            }
          }

          return (
            <li key={index} id={index === 4 && minPhotos > 5 ? 'see-more' : ''}>
              {renderFile()}
            </li>
          )
        })}
        {minPhotos > 5 && <SeeMore onClick={handleModal}>{restPhotos}</SeeMore>}
      </ListPhotos>
      <PhotosAnimalMobile allPhotos={arrayPhoto} />
      {modal && (
        <SlideProduct allPhotos={arrayPhoto} handleModal={handleModal} />
      )}
    </Container>
  );
};
