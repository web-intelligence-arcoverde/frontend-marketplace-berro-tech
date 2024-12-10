'use client'
import { useAppDispatch } from '@/hooks/useSelectorHook';
import { renewLimitProduct } from '@/store/reducer/product/actions';
import { useRouter } from 'next/router';
import { useState } from "react";
import { ButtonToogle, CardToogle, ContainerNotification } from "./style";
import React from 'react';

export const Notification = () => {
  const [state, setState] = useState(false);
  const dispatch = useAppDispatch()

  const router = useRouter()

  const { id } = router.query

  const handleClick = () => {
    const updateState = !state
    setState(updateState);
    if (updateState) {
      dispatch(renewLimitProduct(id))
    }
  };


  return (<ContainerNotification>
    <p>
      Suas publicações ficam ativas por 1 mês, depois desse período você será
      notificado por email para renovar
    </p>
    <CardToogle>
      <p>Ativar renovação automática</p>
      <ButtonToogle isOn={state}
        onClick={handleClick} />
    </CardToogle>
  </ContainerNotification>);
};
