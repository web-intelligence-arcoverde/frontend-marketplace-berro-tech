import { StyleMobile } from "@/style";
import { ReactNode } from "react";
import { ContainerModal, ModalBackground, ButtonClose } from "./style";
import Image from "next/image";
import { ICONS } from "@/assets";
import React from "react";
interface ModalProps {
  children: ReactNode;
  onClick: () => void;
}

export const ModalInformation = ({ children, onClick }: ModalProps) => {
  return (
    <>
      <ModalBackground onClick={onClick}>
        <StyleMobile>
          <ButtonClose>
            <Image src={ICONS.Close} alt='icone de fechar' />
          </ButtonClose>
        </StyleMobile>
      </ModalBackground>
      <ContainerModal>{children}</ContainerModal>
    </>
  );
};
