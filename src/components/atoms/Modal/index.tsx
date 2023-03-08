import React from 'react'
import { ModalContent, ModalWrapper } from './style';

type ModalProps = {
  isOpen: boolean;
  handleToggle: () => void;
  children: React.ReactNode;
};
export const Modal: React.FC<ModalProps> = ({ isOpen, handleToggle, children }) => {


  return (
    <>
      <ModalWrapper onClick={handleToggle} isOpen={isOpen}>
      </ModalWrapper>
      <ModalContent isOpen={isOpen}>
        {children}
      </ModalContent>
    </>
  );
}
