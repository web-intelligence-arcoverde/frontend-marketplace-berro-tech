import React from 'react';
import {DropedImagesCard, DropImage} from './style';
import Image from 'next/image';
import {ICONS} from '@/assets';

interface DropedImagesProps {
  Files: File;
  handleRemove: (e: any) => void;
  index: number;
}

export const DropedImages = (props: DropedImagesProps) => {
  return (
    <DropedImagesCard>
      {props.index === 0 && <span>capa</span>}
      {props.Files.type.startsWith('image/') ? (
        <Image
          key={props.Files.name}
          width={167}
          height={120}
          src={URL.createObjectURL(props.Files)}
          alt='imagen de produto'
        />
      ) : (
        <video key={props.Files.name} controls>
          <source src={URL.createObjectURL(props.Files)} type='video/mp4' />
          Seu navegador não suporta o elemento video.
        </video>
      )}
      <DropImage onClick={() => props.handleRemove(props.index)}>
        <Image src={ICONS.Trash} alt={'imagem de lixeira'} />
      </DropImage>
    </DropedImagesCard>
  );
};
