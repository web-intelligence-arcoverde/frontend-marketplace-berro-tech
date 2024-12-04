import { ICONS } from '@/assets';
import { useAppSelector } from '@/hooks/useSelectorHook';
import { DropdownMock } from '@/mock';
import { filterUserProducts } from '@/store/reducer/auth/actions';
import Image from 'next/image';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  CardSelectProduct,
  ContainerSelectProduct,
  SelectProduct,
} from './style';

export const SelectOrdenationUser = () => {
  const [select, setSelect] = useState<string>('Ordenar Por');
  const [open, setOpen] = useState<boolean>(false);


  const {
    user: { products },
    filterProducts,
  } = useAppSelector((state) => state.auth);

  const product = filterProducts.length >= 1 ? filterProducts : products

  const dispatch = useDispatch()

  const handleOpenSelect = () => {
    setOpen(!open);
  };

  const handleSelect = (event: string) => {
    setSelect(event);

    const olderProducts = [...product].sort(sortFunction)
    const mostRecentProducts = [...product].sort(sortFunctionReverse)

    if (event === 'Mais Recentes') {
      dispatch(filterUserProducts(mostRecentProducts))
    } else {
      dispatch(filterUserProducts(olderProducts))
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
