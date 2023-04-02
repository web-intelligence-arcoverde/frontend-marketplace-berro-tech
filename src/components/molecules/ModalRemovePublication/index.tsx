import { Button, Modal } from "@/components";
import useModalOverflow from "@/hooks/useModalOverflow";
import { useState } from "react";
import { CardButtons, CardRemove } from "./style";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { removeProduct } from "@/store/reducer/product/actions";

export const ModalRemovePublication = () => {
  const [modal, setModal] = useState<boolean>(true);
  const handleModal = () => {
    setModal(false);
  };
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();

  const removeItem = () => {
    dispatch(removeProduct(Number(id)));
    router.push("/minhas-publicacoes");
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
              <Button onClick={removeItem}>Remover</Button>
              <Button onClick={handleModal}>Cancelar</Button>
            </CardButtons>
          </CardRemove>
        </Modal>
      )}
    </>
  );
};
