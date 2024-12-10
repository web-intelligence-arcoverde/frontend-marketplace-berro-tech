'use client'

/* eslint-disable @typescript-eslint/no-explicit-any */

import { ICONS } from '@/assets';
import { DropedImages, Dropzone } from '@/components';
import { useAppDispatch } from '@/hooks/useSelectorHook';
import { addProductImages } from '@/store/reducer/product/actions';
import { StyleDesktop, StyleMobile } from '@/style';
import Image from 'next/image';
import React, { ChangeEvent, useCallback, useState } from 'react';
import {
  ButtonAddImage,
  Container,
  DropedContainer,
  DropedHeader,
  NextButton,
  ButtonsContainer,
  PaddingMobile,
  PaddingMobileDropzone,
  DropedImagesContainer,
} from './style';

export const RegisterPhotos = (props: any) => {
  const dispatch = useAppDispatch();

  const [content, setContent] = useState<File[]>([]);
  const [isDroped, setIsDroped] = useState<boolean>(false);

  const handleDrop = useCallback((acceptedFiles: File[]) => {
    setContent(acceptedFiles);
    setIsDroped(true);
  }, []);

  const handleAddMore = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const fileInput = document.getElementById('file-input');
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleFileInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const fileList = event.target.files;
      if (fileList) {
        const filesArray = Array.from(fileList); // transforma o FileList em um array
        setContent([...content, ...filesArray]);
      }
    },
    [content],
  );

  const handleRemoveFile = (index: number) => {
    const newFiles = [...content];
    newFiles.splice(index, 1);
    setContent(newFiles);
  };
  const handleSubmit = () => {
    dispatch(addProductImages(content));
    props.clickStep(3);
  };

  return (
    <Container>
      {isDroped && content.length > 0 ? (
        <DropedContainer>
          <PaddingMobile>
            <DropedHeader>
              <div>
                <p>Você fez upload de {content?.length} arquivos</p>
                <span>Arraste para fora para remover</span>
              </div>
              <StyleDesktop>
                <ButtonsContainer>
                  <input
                    aria-label='label'
                    id='file-input'
                    type='file'
                    accept="image/jpg, image/jpeg, image/png, video/mp4"
                    multiple
                    onChange={handleFileInputChange}
                    style={{ display: 'none' }}
                  />
                  <ButtonAddImage onClick={handleAddMore}>
                    <Image src={ICONS.Plus} alt='icone de adicionar imagem' />
                  </ButtonAddImage>
                  <NextButton onClick={handleSubmit}>Próximo</NextButton>
                </ButtonsContainer>
              </StyleDesktop>
            </DropedHeader>
            <DropedImagesContainer>
              {content?.map((file, index) => (
                <DropedImages
                  index={index}
                  key={index}
                  Files={file}
                  handleRemove={handleRemoveFile}
                />
              ))}
            </DropedImagesContainer>
          </PaddingMobile>
          <StyleMobile>
            <ButtonsContainer>
              <input
                aria-label='label'
                id='file-input'
                type='file'
                multiple
                onChange={handleFileInputChange}
                style={{ display: 'none' }}
              />
              <ButtonAddImage onClick={handleAddMore}>
                <Image src={ICONS.Plus} alt='icone de adicionar imagem' />
              </ButtonAddImage>
              <NextButton onClick={handleSubmit}>Próximo</NextButton>
            </ButtonsContainer>
          </StyleMobile>
        </DropedContainer>
      ) : (
        <PaddingMobileDropzone>
          <Dropzone onDrop={handleDrop} />
        </PaddingMobileDropzone>
      )}
    </Container>
  );
};
