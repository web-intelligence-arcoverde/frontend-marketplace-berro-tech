import { ICONS } from "@/assets";
import { DropedImages, Dropzone } from "@/components";
import { StyleDesktop, StyleMobile } from "@/style";
import Image from "next/image";
import { ChangeEvent, useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { ButtonAddImage, Container, DropedContainer, DropedHeader, NextButton, ButtonsContainer, PaddingMobile, PaddingMobileDropzone, DropedImagesContainer } from './style'

const RegisterPhotos = ({ formValues, setFormValues }: any) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });

  };
  
  const [content, setContent] = useState<File[]>([]);
  const [isDroped, setIsDroped] = useState<boolean>(false);

  const handleDrop = useCallback((acceptedFiles: File[]) => {
    setContent(acceptedFiles)
    setIsDroped(true)
  }, []);

  const handleAddMore = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const fileInput = document.getElementById("file-input");
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
    [content]
  );

  const handleRemoveFile = (index: number) => {
    const newFiles = [...content];
    newFiles.splice(index, 1);
    setContent(newFiles);
  };

  return (
    <Container>
      {isDroped && content.length > 0 ?
        <DropedContainer>
          <PaddingMobile>

            <DropedHeader>
              <div>
                <p>Você fez upload de {content?.length} arquivos</p>
                <span>Arraste para fora para remover</span>
              </div>
              <StyleDesktop>
                <ButtonsContainer>
                  <input id="file-input" type="file" multiple onChange={handleFileInputChange} style={{ display: "none" }} />
                  <ButtonAddImage onClick={handleAddMore}><Image src={ICONS.Plus} alt='icone de adicionar imagem' /></ButtonAddImage>
                  <NextButton>Próximo</NextButton>
                </ButtonsContainer>
              </StyleDesktop>
            </DropedHeader>
            <DropedImagesContainer>
              {content?.map((file, index) => <DropedImages index={index} key={index} Files={file}  handleRemove={handleRemoveFile}/> )}
            </DropedImagesContainer>
          </PaddingMobile>
          <StyleMobile>
            <ButtonsContainer>
              <input id="file-input" type="file" multiple onChange={handleFileInputChange} style={{ display: "none" }} />
              <ButtonAddImage onClick={handleAddMore}><Image src={ICONS.Plus} alt='icone de adicionar imagem' /></ButtonAddImage>
              <NextButton>Próximo</NextButton>
            </ButtonsContainer>
          </StyleMobile>
        </DropedContainer>
        :
        <PaddingMobileDropzone>
          <Dropzone onDrop={handleDrop} />
        </PaddingMobileDropzone>
      }
    </Container>

  );
};

export default RegisterPhotos;
