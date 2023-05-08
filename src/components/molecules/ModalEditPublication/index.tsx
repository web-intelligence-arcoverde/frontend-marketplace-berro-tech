import {Modal, Steps} from '@/components';
import useModalOverflow from '@/hooks/useModalOverflow';
import {useAppSelector} from '@/hooks/useSelectorHook';
import {closeModalUpdateProduct} from '@/store/reducer/product/actions';
import {useDispatch} from 'react-redux';

export const ModalEditPublication = () => {
  const {modal_update_product} = useAppSelector((state) => state.product);

  const dispatch = useDispatch();

  const onCloseModalUpdateProduct = () => {
    dispatch(closeModalUpdateProduct(modal_update_product));
  };

  useModalOverflow(modal_update_product, onCloseModalUpdateProduct);

  return (
    <>
      {modal_update_product && (
        <Modal onClick={onCloseModalUpdateProduct}>
          <Steps />
        </Modal>
      )}
    </>
  );
};
