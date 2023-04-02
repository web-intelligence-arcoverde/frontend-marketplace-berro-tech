import { Button, Modal } from "@/components";
import useModalOverflow from "@/hooks/useModalOverflow";
import { useState } from "react";
import { CardButtons, CardRemove } from "./style";

export const ModalRemovePublication = () => {
  const [modal, setModal] = useState<boolean>(true);
  const handleModal = () => {
    setModal(!modal);
  };
  useModalOverflow(modal, handleModal);

  return (
    <>
      {modal && (
        <Modal onClick={handleModal}>
          <CardRemove>
            <h1>Tem certeza que deseja remover essa publicação?</h1>
            <h6>Essa é uma ação permanente</h6>
            <CardButtons>
              <Button >Remover</Button>
              <Button onClick={handleModal}>Cancelar</Button>
            </CardButtons>
          </CardRemove>
        </Modal>
      )}
    </>
  );
};
