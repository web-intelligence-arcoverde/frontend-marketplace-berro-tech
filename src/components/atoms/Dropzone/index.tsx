import { ICONS } from "@/assets";
import React, { useCallback } from "react";
import Image from "next/image";
import { useDropzone } from "react-dropzone";
import { DropzoneContainer, InfoContainer } from "./style";

interface DropzoneProps {
  onDrop: (e: File[]) => void;
}

export const Dropzone = ({ onDrop }: DropzoneProps) => {
  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (onDrop) {
        onDrop(acceptedFiles);
      }
    },
    [onDrop]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
  });

  return (
    <DropzoneContainer {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Solte os arquivos aqui ...</p>
      ) : (
        <InfoContainer>
          <Image src={ICONS.Union} alt='icone de seleção de imagens' />
          <p>Adicione fotos e vídeos dos animais </p>
          <span>
            Arraste até aqui ou selecione <br/> no seu computador
          </span>
        </InfoContainer>
      )}
    </DropzoneContainer>
  );
};
