import {useEffect} from 'react';

import {FloatingLabelRadio} from '../..';
import {
  readAnimalRequest,
  readBreedRequest,
} from '@/store/reducer/product/actions';
import {useAppDispatch, useAppSelector} from '@/hooks/useSelectorHook';

export const SelectAnimal = () => {
  const {animals} = useAppSelector((state) => state.product);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(readAnimalRequest());
  }, []);

  const searchBreedByAnimal = (name: string) => {
    dispatch(readBreedRequest(name));
  };

  return (
    <FloatingLabelRadio
      required
      setOption={searchBreedByAnimal}
      placeholder={'Animal'}
      labels={animals}
    />
  );
};
