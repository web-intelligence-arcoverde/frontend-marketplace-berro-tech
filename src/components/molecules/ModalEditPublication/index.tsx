import {Modal, Steps} from '@/components';
import useModalOverflow from '@/hooks/useModalOverflow';
import {useState} from 'react';
import {useRouter} from 'next/router';

export const ModalEditPublication = () => {
  const [modal, setModal] = useState<boolean>(true);

  const removeCancel = () => {
    setModal(false);
  };
  const router = useRouter();
  const {id} = router.query;

  useModalOverflow(modal, removeCancel);

  return (
    <>
      {modal && (
        <Modal onClick={removeCancel}>
          <Steps />
        </Modal>
      )}
    </>
  );
};
