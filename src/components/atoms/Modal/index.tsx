import { StyleMobile } from "@/style";
import { ReactNode } from "react";
import { ContainerModal, ModalBackground, ButtonClose } from "./style";
import Image from "next/image";
import { ICONS } from "@/assets";

interface ModalProps {
  children: ReactNode;
  onClick: () => void;
}

export const Modal = ({ children, onClick }: ModalProps) => {
  return (
    <>
      <StyleMobile>
        <ButtonClose onClick={onClick}>
          <Image src={ICONS.Close} alt='icone de fechar' />
        </ButtonClose>
      </StyleMobile>
      <ModalBackground onClick={onClick} />
      <ContainerModal>{children}</ContainerModal>
    </>
  );
};
