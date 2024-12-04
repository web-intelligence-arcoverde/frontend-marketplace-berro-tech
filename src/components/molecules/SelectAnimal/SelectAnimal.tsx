/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';

import { FloatingLabelRadio } from '../..';
import {
  readAnimalRequest,
  readBreedRequest,
} from '@/store/reducer/product/actions';
import { useAppDispatch, useAppSelector } from '@/hooks/useSelectorHook';

interface ISelectAnimal {
  value: string;
  setValue?: any;
}
import React from 'react';

export const SelectAnimal = ({ value, setValue }: ISelectAnimal) => {
  const { animals } = useAppSelector((state) => state.product);

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
      placeholder='Animal'
      name='animal'
      labels={animals}
      value={value}
      setValue={setValue}
    />
  );
};
