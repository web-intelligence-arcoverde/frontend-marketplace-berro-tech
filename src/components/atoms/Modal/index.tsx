import useModalOverflow from "@/hooks/useModalOverflow";
import { ModalContent, ModalWrapper } from "./style";

type ModalProps = {
  isOpen: boolean;
  handleToggle: () => void;
  children: React.ReactNode;
};
export const Modal: React.FC<ModalProps> = ({
  isOpen,
  handleToggle,
  children,
}) => {

  useModalOverflow(isOpen)

  return (
    <>
      <ModalWrapper onClick={handleToggle} isOpen={isOpen}></ModalWrapper>
      <ModalContent isOpen={isOpen}>{children}</ModalContent>
    </>
  );
};
