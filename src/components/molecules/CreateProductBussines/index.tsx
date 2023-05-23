import {
  FloatingInputMask,
  FloatingLabelInput,
  FloatingLabelRadio,
} from '@/components';
import {useAppDispatch, useAppSelector} from '@/hooks/useSelectorHook';
import {readSaleTypeRequest} from '@/store/reducer/product/actions';
import React, {useEffect, useState} from 'react';

export const CreateProductBussines = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(readSaleTypeRequest());
  }, []);

  const {sale} = useAppSelector((state) => state.product);

  const [bussinessInformation, setBussinessInformation] = useState({
    sellType: '',
    quantity: '',
    price: '',
    installments: '',
  });

  const onChange = (name: string, value: any) => {
    setBussinessInformation({...bussinessInformation, [name]: value});
    console.log('Payload:', { ...bussinessInformation, [name]: value });
  };

  return (
    <div>
      <FloatingLabelRadio
        required
        isWhite
        placeholder={'Tipo de venda'}
        name='sellType'
        id='sellType'
        labels={sale}
        value={bussinessInformation.sellType}
        setValue={(event: any) => onChange('sellType', event.target.value)}
      />
      <FloatingLabelInput
        required
        isWhite
        type='number'
        id='quantity'
        name='quantity'
        placeholder='Quantidade de animais'
        value={bussinessInformation.quantity}
        setValue={(event: any) => onChange('quantity', event.target.value)}
      />
      <FloatingInputMask
        required
        isWhite
        type='text'
        id='price'
        name='price'
        placeholder='Preço'
        maskType='price'
        maxLength={14}
        value={bussinessInformation.price}
        setValue={(event: any) => onChange('price', event)}
       
      />
      <FloatingLabelInput
        required
        isWhite
        type='number'
        id='installments'
        name='installments'
        placeholder='Parcelas'
        value={bussinessInformation.installments}
        setValue={(event: any) => onChange('installments', event.target.value)}
      />
    </div>
  );
};
