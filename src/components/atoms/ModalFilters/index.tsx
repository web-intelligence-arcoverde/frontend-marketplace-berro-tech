import useModalOverflow from "@/hooks/useModalOverflow";
import { ModalContent, ModalWrapper } from "./style";
import React from "react";
type ModalFiltersProps = {
  isOpen: boolean;
  handleToggle: () => void;
  children: React.ReactNode;
};
export const ModalFilters = ({
  isOpen,
  handleToggle,
  children,
}: ModalFiltersProps) => {
  useModalOverflow(isOpen);

  return (
    <>
      <ModalWrapper onClick={handleToggle} isOpen={isOpen}></ModalWrapper>
      <ModalContent isOpen={isOpen}>{children}</ModalContent>
    </>
  );
};
