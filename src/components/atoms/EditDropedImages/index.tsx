import React from 'react';
import { DropedImagesCard, DropImage } from './style';
import Image from 'next/image';
import { ICONS } from '@/assets';

interface DropedImagesProps {
  file: any;
  handleRemove: (e: any) => void;
  index: number;
  countImages?: number
}

export const EditDropedImages = ({
  file,
  index,
  countImages = 1,
  handleRemove,
}: DropedImagesProps) => {
  let splitFileUrl = !!file.url && file.url.split('.');

  let fileType =
    splitFileUrl.length > 0 && splitFileUrl[splitFileUrl.length - 1];

  const imagesType = ['jpeg', 'png'];

  let fileTypeFileObj = !!file?.type?.startsWith('image/');

  let widthImage = 167;
  let heightImage = 120;
  let altImage = 'imagen de produto';

  let currentFileType = !!file.url && file.url.split('.').reverse()[0]

  const renderImage = () => {
    if (imagesType.includes(fileType)) {
      return (
        <Image
          key={file.id}
          width={widthImage}
          height={heightImage}
          src={file.url}
          alt={altImage}
        />
      );
    } else if (fileTypeFileObj) {
      return (
        <Image
          key={file.name}
          width={widthImage}
          height={heightImage}
          src={URL.createObjectURL(file)}
          alt={altImage}
        />
      );
    }
  };

  const renderVideo = () => {
    if (currentFileType === 'mp4') {
      return (
        <video key={file.name} controls>
          <source src={file.url} type='video/mp4' />
        </video>
      );
    } else if (!fileTypeFileObj && !imagesType.includes(fileType)) {
      return (
        <video key={file.name} controls>
          <source src={URL.createObjectURL(file)} type='video/mp4' />
          Seu navegador não suporta o elemento video.
        </video>
      );
    }
  };

  return (
    <DropedImagesCard>
      {index === 0 && <span>capa</span>}
      {renderImage()}
      {renderVideo()}
      {countImages > 1 &&
        <DropImage onClick={() => handleRemove(index)}>
          <Image src={ICONS.Trash} alt={'imagem de lixeira'} />
        </DropImage>}
    </DropedImagesCard>
  );
};
