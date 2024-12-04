import { ReactNode } from "react";
import { ContainerModal, ModalBackground } from "./style";
import React from "react";
interface ModalProps {
  children: ReactNode;
  onClick: () => void;
}

export const Modal = ({ children, onClick }: ModalProps) => {
  return (
    <>
      <ModalBackground onClick={onClick} />
      <ContainerModal>{children}</ContainerModal>
    </>
  );
};
