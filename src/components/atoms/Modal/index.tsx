import { ReactNode } from "react";
import { ContainerModal, ModalBackground } from "./style";

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
