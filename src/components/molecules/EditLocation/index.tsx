import {FloatingLabelInput} from '@/components';
import {useAppDispatch, useAppSelector} from '@/hooks/useSelectorHook';
import {closeModalUpdateProduct, updateProductLocationRequest} from '@/store/reducer/product/actions';
import {ProductLocationType} from '@/store/reducer/product/types';
import {
  Container,
  ContainerInputs,
  NextButton,
  NextButtonContainer,
  ContainerTitle,
} from './style';

import {useState} from 'react';

export const EditLocation = () => {
  const dispatch = useAppDispatch();
  const formData = {} as ProductLocationType;

  const {
    product_by_id: {products},
  } = useAppSelector((state) => state.product);

  const {address, id} = products;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const inputs = form.querySelectorAll<HTMLInputElement>('[name]');
    inputs.forEach((input) => {
      const {name, value} = input;
      formData[name] = value;
    });

    dispatch(updateProductLocationRequest({id, formData}));
    
    dispatch(closeModalUpdateProduct(false));
  };

  const [productInfo, setProductInfo] = useState(address);

  const onChange = (name: string, value: any) => {
    setProductInfo({...productInfo, [name]: value});
  };

  return (
    <Container onSubmit={handleSubmit}>
      <ContainerTitle>
        <h2>Usar sua localização padrão</h2>
        <ContainerInputs>
          <FloatingLabelInput
            type='text'
            id='state'
            isWhite
            name='state'
            placeholder='Estado'
            setValue={(event: any) => onChange('state', event.target.value)}
            value={productInfo.state}
          />
          <FloatingLabelInput
            type='text'
            id='city'
            isWhite
            name='city'
            placeholder='Cidade'
            setValue={(event: any) => onChange('city', event.target.value)}
            value={productInfo.city}
          />
        </ContainerInputs>
      </ContainerTitle>
      <NextButtonContainer>
        <NextButton type='submit'>Salvar</NextButton>
      </NextButtonContainer>
    </Container>
  );
};
