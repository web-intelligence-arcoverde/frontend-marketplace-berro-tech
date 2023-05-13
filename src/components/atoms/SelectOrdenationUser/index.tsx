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

    let olderProducts = [...product].sort(sortFunction)
    let mostRecentProducts = [...product].sort(sortFunctionReverse)

    if (event === 'Mais Recentes') {
      dispatch(filterUserProducts(mostRecentProducts))
    } else {
      dispatch(filterUserProducts(olderProducts))
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
