import {
  FloatingLabelInput,
  FloatingLabelRadio,
  FloatingLabelTextarea,
  SelectAnimal,
  FloatingInputMask,
} from '@/components';
import {useAppDispatch, useAppSelector} from '@/hooks/useSelectorHook';
import {
  readAgeCategoriesRequest,
  readClassificationsRequest,
} from '@/store/reducer/product/actions';
import {useEffect, useState} from 'react';

function formatDate(date: any) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}

export const EditProductInfo = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(readAgeCategoriesRequest());
    dispatch(readClassificationsRequest());
  }, []);

  const {breeds, age_categories, classifications} = useAppSelector(
    (state) => state.product,
  );
  const currentDate = new Date().toISOString().split('T')[0];

  const isExistBreeds = breeds.length >= 1;

  const {
    product_by_id: {products},
  } = useAppSelector((state) => state.product);

  const {
    name,
    breed,
    classification,
    gender,
    date_birth,
    weight,
    ageCategory,
    description,
  } = products;

  const [productInfo, setProductInfo] = useState({
    name,
    animal: breed.animal.name,
    breed: breed.name,
    classification: classification.name,
    gender: gender,
    ageCategory: ageCategory.name,
    weight: weight,
    date_birth: formatDate(new Date(date_birth)),
    description,
  });

  const onChange = (name: string, value: any) => {
    setProductInfo({...productInfo, [name]: value});
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
        setValue={(event: any) => onChange('name', event?.target?.value)}
      />
      <SelectAnimal
        value={productInfo.animal}
        setValue={(event: any) => onChange('animal', event?.target?.value)}
      />
      <FloatingLabelRadio
        required
        disable={!isExistBreeds}
        placeholder='Raça'
        name='breed'
        id='breed'
        labels={breeds}
        value={breed.name}
        setValue={(event: any) => onChange('breed', event.target.value)}
      />
      <FloatingLabelRadio
        value={productInfo.classification}
        setValue={(event: any) =>
          onChange('classification', event.target.value)
        }
        required
        placeholder={'Classificação'}
        id='classification'
        name='classification'
        labels={classifications}
      />
      <FloatingLabelRadio
        value={productInfo.gender}
        setValue={(event: any) => onChange('gender', event.target.value)}
        labels={[{name: 'Macho'}, {name: 'Fêmea'}]}
        required
        name='gender'
        placeholder={'Sexo'}
        id='gender'
      />
      <FloatingLabelRadio
        value={productInfo.ageCategory}
        setValue={(event: any) => onChange('ageCategory', event.target.value)}
        required
        name='ageCategory'
        placeholder='Idade'
        id='age'
        labels={age_categories}
      />
      <FloatingInputMask
        value={productInfo.weight.toString()}
        setValue={(event: any) => onChange('weight', event)}
        required
        type='text'
        id='weight'
        name='weight'
        maskType='weight'
        placeholder='Peso/KG'
      />
      <FloatingInputMask
        type='date'
        id='birthday'
        name='date_birth'
        placeholder='Data de nascimento'
        max={currentDate}
        maskType='date'
        value={productInfo.date_birth}
        setValue={(event: any) => onChange('date_birth', event)}
      />
      <FloatingLabelTextarea
        value={productInfo.description}
        setValue={(event: any) => onChange('description', event.target.value)}
        required
        type='text'
        id='description'
        name='description'
        placeholder='Descrição'
      />
    </div>
  );
};
