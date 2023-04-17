import {FloatingLabelInput, FloatingLabelRadio} from '@/components';
import {useAppDispatch, useAppSelector} from '@/hooks/useSelectorHook';
import {readSaleTypeRequest} from '@/store/reducer/product/actions';
import {useEffect} from 'react';

export const CreateProductBussines = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(readSaleTypeRequest());
  }, []);

  const {sale} = useAppSelector((state) => state.product);

  return (
    <div>
      <FloatingLabelRadio
        required
        isWhite
        placeholder={'Tipo de venda'}
        name='sellType'
        id='sellType'
        labels={sale}
      />
      <FloatingLabelInput
        required
        isWhite
        type='number'
        id='quantity'
        name='quantity'
        placeholder='Quantidade de animais'
      />
      <FloatingLabelInput
        required
        isWhite
        type='text'
        id='price'
        name='price'
        placeholder='Preço'
        maxLength={14}
      />
      <FloatingLabelInput
        required
        isWhite
        type='number'
        id='installments'
        name='installments'
        placeholder='Parcelas'
      />
    </div>
  );
};
