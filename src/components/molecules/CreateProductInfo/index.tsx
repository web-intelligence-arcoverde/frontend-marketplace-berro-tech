import {
  FloatingLabelInput,
  FloatingLabelRadio,
  FloatingLabelTextarea,
  SelectAnimal,
} from '@/components';
import {useAppDispatch, useAppSelector} from '@/hooks/useSelectorHook';
import {
  readAgeCategoriesRequest,
  readClassificationsRequest,
} from '@/store/reducer/product/actions';
import {useEffect} from 'react';

export const CreateProductInfo = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(readAgeCategoriesRequest());
    dispatch(readClassificationsRequest());
  }, []);

  const {breeds, age_categories, classifications} = useAppSelector(
    (state) => state.product,
  );

  const isExistBreeds = breeds.length > 1;

  return (
    <div>
      <FloatingLabelInput
        required
        type='text'
        id='name'
        name='name'
        placeholder='Nome'
      />
      <SelectAnimal />
      <FloatingLabelRadio
        required
        disable={!isExistBreeds}
        placeholder='Raça'
        name='breed'
        id='breed'
        labels={breeds}
      />
      <FloatingLabelRadio
        required
        placeholder={'Classificação'}
        id='classification'
        name='classification'
        labels={classifications}
      />
      <FloatingLabelRadio
        required
        name='gender'
        placeholder={'Sexo'}
        id='gender'
        labels={[{name: 'Macho'}, {name: 'Fêmea'}]}
      />
      <FloatingLabelRadio
        required
        name='date'
        placeholder='Idade'
        id='age'
        labels={age_categories}
      />
      <FloatingLabelInput
        required
        type='text'
        id='weight'
        name='weight'
        placeholder='Peso/kg'
      />
      <FloatingLabelInput
        type='date'
        id='birthday'
        name='birthday'
        placeholder='Data de nascimento'
  
      />
      <FloatingLabelTextarea
        required
        type='text'
        id='description'
        name='description'
        placeholder='Descrição'
      />
    </div>
  );
};
