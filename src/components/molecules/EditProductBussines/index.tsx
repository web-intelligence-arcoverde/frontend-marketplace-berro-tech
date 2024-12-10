'use client'

/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import {
  FloatingLabelInput,
  FloatingLabelRadio,
  FloatingInputMask,
} from '@/components';
import { useFormatMoney } from '@/hooks/useFormatMoney';
import { useAppDispatch, useAppSelector } from '@/hooks/useSelectorHook';
import { readSaleTypeRequest } from '@/store/reducer/product/actions';
import { useEffect, useState } from 'react';

export const EditProductBussines = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(readSaleTypeRequest());
  }, []);

  const { sale } = useAppSelector((state) => state.product);

  const {
    product_by_id: { products },
  } = useAppSelector((state) => state.product);

  const { business } = products;

  const [bussinessInformation, setBussinessInformation] = useState({
    sellType: business.sale.name,
    quantity: business.amount,
    price: useFormatMoney(business.price),
    installments: business.installments,
  });


  const onChange = (name: string, value: any) => {
    setBussinessInformation({ ...bussinessInformation, [name]: value });
  };

  return (
    <div>
      <FloatingLabelRadio
        value={bussinessInformation.sellType}
        required
        isWhite
        placeholder={'Tipo de venda'}
        name='sellType'
        id='sellType'
        labels={sale}
        setValue={(event: any) => onChange('sellType', event.target.value)}
      />
      <FloatingLabelInput
        required
        isWhite
        value={bussinessInformation.quantity}
        type='number'
        id='quantity'
        name='quantity'
        placeholder='Quantidade de animais'
        setValue={(event: any) => onChange('quantity', event.target.value)}
      />
      <FloatingInputMask
        required
        isWhite
        type='text'
        id='price'
        value={bussinessInformation.price}
        name='price'
        placeholder='Preço'
        maskType='price'
        maxLength={14}
        setValue={(event: any) => onChange('price', event)}
      />
      <FloatingLabelInput
        required
        isWhite
        type='number'
        id='installments'
        value={bussinessInformation.installments}
        name='installments'
        placeholder='Parcelas'
        setValue={(event: any) => onChange('installments', event.target.value)}
      />
    </div>
  );
};
