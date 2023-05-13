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

  let isExistItemsSelectedFilter = allFilterSelected.length >= 1;

  let product = isExistItemsSelectedFilter
    ? filterProductByAnimal
    : filterProductByAnimal.length >= 1
      ? filterProductByAnimal
      : allProducts;

  const handleOpenSelect = () => {
    setOpen(!open);
  };

  const handleSelect = (event: string) => {
    setSelect(event);


    let olderProducts = [...product].sort(sortFunction)
    let mostRecentProducts = [...product].sort(sortFunctionReverse)

    if (event === 'Mais Recentes') {
      dispatch(filterProductsByAnimal(mostRecentProducts));
    } else {
      dispatch(filterProductsByAnimal(olderProducts));
    }

    setOpen(!open);
  };

  //@ts-ignore
  function sortFunction(a, b) {
    var dateA = new Date(a.created_at).getTime();
    var dateB = new Date(b.created_at).getTime();

    return dateA > dateB ? 1 : -1;
  };

  //@ts-ignore
  function sortFunctionReverse(a, b) {
    var dateA = new Date(a.created_at).getTime();
    var dateB = new Date(b.created_at).getTime();

    return dateA < dateB ? 1 : -1;
  };

  return (
    <ContainerSelectProduct>
      <SelectProduct
        open={open}
        onClick={handleOpenSelect}
        placeholder='Orderna por'
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
