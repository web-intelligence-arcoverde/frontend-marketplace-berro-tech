import {ICONS} from '@/assets';
import {Dropzone} from '@/components';
import {useAppDispatch, useAppSelector} from '@/hooks/useSelectorHook';
import {
  addProductImages,
  addProductPhotoRequest,
  closeModalUpdateProduct,
  deleteProductPhotoRequest,
} from '@/store/reducer/product/actions';
import {StyleDesktop, StyleMobile} from '@/style';
import Image from 'next/image';
import {ChangeEvent, useCallback, useEffect, useState} from 'react';
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

import {EditDropedImages} from '../../atoms/EditDropedImages';

export const EditRegisterPhotos = () => {
  const dispatch = useAppDispatch();

  const [content, setContent] = useState<File[]>([]);
  const [isDroped, setIsDroped] = useState<boolean>(false);
  const [images, setImages] = useState<any[]>([]);
  const [loadingImages, setLoadingImages] = useState(true);

  const {
    product_by_id: {products},
  } = useAppSelector((state) => state.product);

  const {documents, id} = products;

  useEffect(() => {
    setImages(documents);
    setLoadingImages(false);
  }, []);

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
        const filesArray = Array.from(fileList);
        setImages([...images, ...filesArray]);
      }
    },
    [images],
  );

  const handleRemoveFile = (index: number) => {
    const newFiles = [...images];

    let deleteFile = images.filter((item, posi) => posi === index)[0];

    newFiles.splice(index, 1);
    setImages(newFiles);

    dispatch(deleteProductPhotoRequest(deleteFile.file));
  };
  const handleSubmit = () => {
    let newImages = images.filter((item: any) => !!item.id == false);

    dispatch(addProductPhotoRequest({id, files: newImages}));
    
    dispatch(closeModalUpdateProduct(false))
  };

  return (
    <Container>
      {images.length > 0 ? (
        <DropedContainer>
          <PaddingMobile>
            <DropedHeader>
              <div>
                <p>Você fez upload de {images?.length} arquivos</p>
                <span>Arraste para fora para remover</span>
              </div>
              <StyleDesktop>
                <ButtonsContainer>
                  <input
                    id='file-input'
                    type='file'
                    multiple
                    onChange={handleFileInputChange}
                    style={{display: 'none'}}
                  />
                  <ButtonAddImage onClick={handleAddMore}>
                    <Image src={ICONS.Plus} alt='icone de adicionar imagem' />
                  </ButtonAddImage>
                  <NextButton onClick={handleSubmit}>Salvar</NextButton>
                </ButtonsContainer>
              </StyleDesktop>
            </DropedHeader>
            <DropedImagesContainer>
              {images?.map((file, index) => {
                return (
                  <EditDropedImages
                    countImages={images.length}
                    index={index}
                    key={index}
                    file={file}
                    handleRemove={handleRemoveFile}
                  />
                );
              })}
            </DropedImagesContainer>
          </PaddingMobile>
          <StyleMobile>
            <ButtonsContainer>
              <input
                id='file-input'
                type='file'
                multiple
                onChange={handleFileInputChange}
                style={{display: 'none'}}
              />
              <ButtonAddImage onClick={handleAddMore}>
                <Image src={ICONS.Plus} alt='icone de adicionar imagem' />
              </ButtonAddImage>
              <NextButton onClick={handleSubmit}>Salvar</NextButton>
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
