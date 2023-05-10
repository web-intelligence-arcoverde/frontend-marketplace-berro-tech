import { ICONS } from '@/assets';
import { useAppSelector } from '@/hooks/useSelectorHook';
import { DropdownMock } from '@/mock';
import { productsWithOutFilters } from '@/store/reducer/product/actions';
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

  const { allProducts, filterProductByAnimal } = useAppSelector((state) => state.product);
  const dispatch = useDispatch()

  const handleOpenSelect = () => {
    setOpen(!open);
  };



  const handleSelect = (event: string) => {
    setSelect(event);

    let existFilteredProducts = filterProductByAnimal.length >= 1


    let olderProducts = existFilteredProducts ? [...filterProductByAnimal].sort(sortFunction) : [...allProducts].sort(sortFunction)
    let mostRecentProducts = existFilteredProducts ? [...filterProductByAnimal].sort(sortFunction) : [...allProducts].sort(sortFunctionReverse)

    if (event === 'Mais Recentes') {
      dispatch(productsWithOutFilters(mostRecentProducts))
    } else {
      dispatch(productsWithOutFilters(olderProducts))
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
