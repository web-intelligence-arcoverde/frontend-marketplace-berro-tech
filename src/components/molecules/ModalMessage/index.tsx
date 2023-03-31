import { ICONS } from "@/assets";
<<<<<<< Updated upstream
import { IconLoading } from "@/components/atoms";
import Image from "next/image";
import { ButtonClose, ContainerModalMessage } from "./style";

interface ModalMessageProps {
  typeMessage: "error" | "sucess" | "loading";
  onClick: () => void;
}

export const ModalMessage = ({ typeMessage, onClick }: ModalMessageProps) => {
  return (
    <ContainerModalMessage error = {typeMessage === 'error'}>
      <ButtonClose onClick={onClick}>
        <Image src={ICONS.Excluir} alt="imagem de close" />
      </ButtonClose>
      {typeMessage == "loading" && (
        <>
          <IconLoading />
          <h1>Preparando publicação</h1>
          <h6>Estamos organizando a página do seu negócio</h6>
        </>
      )}
      {typeMessage == "error" && (
        <>
          <Image src={ICONS.Error} alt="imagem de error" />
          <h1>Aconteceu algum problema</h1>
          <h6>Estamos tentando resolver, tente novamente mais tarde</h6>
        </>
      )}
      {typeMessage == "sucess" && (
        <>
          <Image src={ICONS.Sucess} alt="imagem de sucesso" />
          <h1>Tudo certo!</h1>
          <h6>Sua publicação já está na plataforma</h6>
        </>
      )}
    </ContainerModalMessage>
=======
import { IconLoading, Modal } from "@/components/atoms";
import Image from "next/image";
import { ButtonClose, ContainerModalMessage } from "./style";
import { useState } from "react";
import useModalOverflow from "@/hooks/useModalOverflow";

interface ModalMessageProps {
  typeMessage: "error" | "sucess" | "loading";
  messageError?: string;
}

export const ModalMessage = ({
  typeMessage,
  messageError,
}: ModalMessageProps) => {
  const [modal, setModal] = useState<boolean>(true);
  const handleModal = () => {
    setModal(!modal);
  };
useModalOverflow(modal, handleModal);

  return (
    <>
      {modal && (
        <Modal onClick={handleModal}>
          <ContainerModalMessage error={typeMessage === "error"}>
            <ButtonClose onClick={handleModal}>
              <Image src={ICONS.Excluir} alt="imagem de close" />
            </ButtonClose>
            {typeMessage == "loading" && (
              <>
                <IconLoading />
                <h1>Preparando publicação</h1>
                <h6>Estamos organizando a página do seu negócio</h6>
              </>
            )}
            {typeMessage == "error" && (
              <>
                <Image src={ICONS.Error} alt="imagem de error" />
                <h1>Aconteceu algum problema</h1>
                <h6>
                  {messageError
                    ? messageError
                    : "Estamos tentando resolver, tente novamente mais tarde"}
                </h6>
              </>
            )}
            {typeMessage == "sucess" && (
              <>
                <Image src={ICONS.Sucess} alt="imagem de sucesso" />
                <h1>Tudo certo!</h1>
                <h6>Sua publicação já está na plataforma</h6>
              </>
            )}
          </ContainerModalMessage>
        </Modal>
      )}
    </>
>>>>>>> Stashed changes
  );
};
