import { Button, Modal } from '@/components';
import { useState } from 'react';
import { CardButtons, CardRemove } from './style';
import React from 'react';

export const ModalDeleteUser = () => {
  const [modal] = useState<boolean>(true);


  return (
    <>
      {modal && (
        <Modal onClick={() => { }}>
          <CardRemove>
            <h1>Tem certeza que deseja remover essa publicação?</h1>
            <h6>Essa é uma ação permanente</h6>
            <CardButtons>
              <Button onClick={() => { }}>Remover</Button>
              <Button onClick={() => { }}>Cancelar</Button>
            </CardButtons>
          </CardRemove>
        </Modal>
      )}
    </>
  );
};
