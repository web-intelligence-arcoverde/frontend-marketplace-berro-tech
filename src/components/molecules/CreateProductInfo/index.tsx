import {
  FloatingInputMask,
  FloatingLabelInput,
  FloatingLabelRadio,
  FloatingLabelTextarea,
  SelectAnimal,
} from '@/components';
import { useAppDispatch, useAppSelector } from '@/hooks/useSelectorHook';
import {
  readAgeCategoriesRequest,
  readClassificationsRequest,
} from '@/store/reducer/product/actions';
import React, { useEffect, useState } from 'react';

export const CreateProductInfo = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(readAgeCategoriesRequest());
    dispatch(readClassificationsRequest());
  }, []);

  const { breeds, age_categories, classifications } = useAppSelector(
    (state) => state.product,
  );
  const currentDate = new Date().toISOString().split('T')[0];

  const isExistBreeds = breeds.length > 1;

  var utc = new Date().toJSON().slice(0, 10).replace(/-/g, '/');

  const [productInfo, setProductInfo] = useState({
    name: '',
    animal: '',
    breed: '',
    classification: '',
    gender: '',
    ageCategory: '',
    weight: '',
    date_birth: utc,
    description: '',
  });

  const onChange = (name: string, value: any) => {
    setProductInfo({ ...productInfo, [name]: value });
  };

  return (
    <div>
      <FloatingLabelInput
        required
        type='text'
        id='name'
        name='name'
        placeholder='Nome'
        value={productInfo.name}
        setValue={(event: any) => onChange('name', event.target.value)}
      />
      <SelectAnimal
        value={productInfo.animal}
        setValue={(event: any) => onChange('animal', event.target.value)}
      />
      <FloatingLabelRadio
        required
        disabled={!isExistBreeds}
        placeholder='Raça'
        name='breed'
        id='breed'
        labels={breeds}
        value={productInfo.breed}
        setValue={(event: any) => onChange('breed', event.target.value)}
      />
      <FloatingLabelRadio
        required
        placeholder={'Classificação'}
        id='classification'
        name='classification'
        labels={classifications}
        value={productInfo.classification}
        setValue={(event: any) =>
          onChange('classification', event.target.value)
        }
      />
      <FloatingLabelRadio
        required
        name='gender'
        placeholder={'Sexo'}
        id='gender'
        labels={[{ name: 'Macho' }, { name: 'Fêmea' }]}
        value={productInfo.gender}
        setValue={(event: any) => onChange('gender', event.target.value)}
      />
      <FloatingLabelRadio
        required
        name='date'
        placeholder='Idade'
        id='age'
        labels={age_categories}
        value={productInfo.ageCategory}
        setValue={(event: any) => onChange('ageCategory', event.target.value)}
      />
      <FloatingInputMask
        required
        type='text'
        id='weight'
        name='weight'
        placeholder='Peso/kg'
        value={productInfo.weight}
        maskType='weight'
        setValue={(event: any) => onChange('weight', event)}
      />
      <FloatingInputMask
        type='date'
        id='birthday'
        name='birthday'
        maskType='date'
        placeholder='Data de nascimento'
        max={currentDate}
        value={productInfo.date_birth}
        setValue={(event: any) => onChange('date_birth', event)}
      />
      <FloatingLabelTextarea
        required
        type='text'
        id='description'
        name='description'
        placeholder='Descrição'
        value={productInfo.description}
        setValue={(event: any) => onChange('description', event.target.value)}
      />
    </div>
  );
};
