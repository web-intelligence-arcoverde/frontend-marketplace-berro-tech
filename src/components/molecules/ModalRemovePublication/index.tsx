import {Button, Modal} from '@/components';
import useModalOverflow from '@/hooks/useModalOverflow';
import {useState} from 'react';
import {CardButtons, CardRemove} from './style';
import {useDispatch} from 'react-redux';
import {useRouter} from 'next/router';
import {
  removeProduct,
  removeProductModal,
} from '@/store/reducer/product/actions';
import {useAppSelector} from '@/hooks/useSelectorHook';

export const ModalRemovePublication = () => {
  const [modal, setModal] = useState<boolean>(true);
  const controlModal = useAppSelector(
    (state) => state.product.removeProductModal,
  );
  const removeCancel = () => {
    setModal(false);
    dispatch(removeProductModal(controlModal));
  };
  const router = useRouter();
  const {id} = router.query;
  const dispatch = useDispatch();

  const removeItem = () => {
    dispatch(removeProduct(Number(id)));
    router.replace('/minhas-publicacoes');
    dispatch(removeProductModal(controlModal));
  };

  useModalOverflow(modal, removeCancel);

  return (
    <>
      {modal && (
        <Modal onClick={removeCancel}>
          <CardRemove>
            <h1>Tem certeza que deseja remover essa publicação?</h1>
            <h6>Essa é uma ação permanente</h6>
            <CardButtons>
              <Button onClick={removeItem}>Remover</Button>
              <Button onClick={removeCancel}>Cancelar</Button>
            </CardButtons>
          </CardRemove>
        </Modal>
      )}
    </>
  );
};
