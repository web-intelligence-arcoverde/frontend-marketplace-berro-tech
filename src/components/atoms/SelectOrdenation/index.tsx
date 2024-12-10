'use client'

import { ICONS } from '@/assets';
import { useAppSelector } from '@/hooks/useSelectorHook';
import { DropdownMock } from '@/mock';
import { filterProductsByAnimal } from '@/store/reducer/product/actions';
import Image from 'next/image';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  CardSelectProduct,
  ContainerSelectProduct,
  SelectProduct,
} from './style';

export const SelectOrdenation = () => {
  const [select, setSelect] = useState<string>('Ordenar Por');
  const [open, setOpen] = useState<boolean>(false);

  const { allProducts, filterProductByAnimal, allFilterSelected } = useAppSelector((state) => state.product);
  const dispatch = useDispatch()

  const isExistItemsSelectedFilter = allFilterSelected.length >= 1;

  const product = isExistItemsSelectedFilter
    ? filterProductByAnimal
    : filterProductByAnimal.length >= 1
      ? filterProductByAnimal
      : allProducts;

  const handleOpenSelect = () => {
    setOpen(!open);
  };

  const handleSelect = (event: string) => {
    setSelect(event);


    const olderProducts = [...product].sort(sortFunction)
    const mostRecentProducts = [...product].sort(sortFunctionReverse)

    if (event === 'Mais Recentes') {
      dispatch(filterProductsByAnimal(mostRecentProducts));
    } else {
      dispatch(filterProductsByAnimal(olderProducts));
    }

    setOpen(!open);
  };

  //@ts-expect-error:error
  function sortFunction(a, b) {
    const dateA = new Date(a.created_at).getTime();
    const dateB = new Date(b.created_at).getTime();

    return dateA > dateB ? 1 : -1;
  };

  //@ts-expect-error:error
  function sortFunctionReverse(a, b) {
    const dateA = new Date(a.created_at).getTime();
    const dateB = new Date(b.created_at).getTime();

    return dateA < dateB ? 1 : -1;
  };

  return (
    <ContainerSelectProduct>
      <SelectProduct
        open={open}
        onClick={handleOpenSelect}

      >
        <span>{select}</span>
        <Image src={ICONS.Up} alt='direção da seta' />
      </SelectProduct>
      {open && (
        <CardSelectProduct open={open}>
          {DropdownMock.map((item, index) => (
            <span
              onClick={() => {
                handleSelect(item);
              }}
              key={index}
            >
              {item}
            </span>
          ))}
        </CardSelectProduct>
      )}
    </ContainerSelectProduct>
  );
};
