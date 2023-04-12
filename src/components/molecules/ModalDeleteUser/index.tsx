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

export const ModalDeleteUser = () => {
  const [modal, setModal] = useState<boolean>(true);

  //useModalOverflow(modal, removeCancel);

  return (
    <>
      {modal && (
        <Modal onClick={() => {}}>
          <CardRemove>
            <h1>Tem certeza que deseja remover essa publicação?</h1>
            <h6>Essa é uma ação permanente</h6>
            <CardButtons>
              <Button onClick={() => {}}>Remover</Button>
              <Button onClick={() => {}}>Cancelar</Button>
            </CardButtons>
          </CardRemove>
        </Modal>
      )}
    </>
  );
};
