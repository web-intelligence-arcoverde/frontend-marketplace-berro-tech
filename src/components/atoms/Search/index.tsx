/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'

import Image from 'next/image';
import { ICONS } from '@/assets';
import { ButtonSearchMobile, CardSearch, IconLupa } from './style';
import React, { ChangeEvent, MouseEventHandler, useEffect, useState } from 'react';
import {
  addItem,
  currentSearch,
  filterItems,
  getAllProducts,
  searchMobile
} from '@/store/reducer/product/actions';
import { useAppDispatch, useAppSelector } from '@/hooks/useSelectorHook';
import { KeyboardEvent } from 'react';
interface ISearch {
  isFocused: boolean;
  setIsFocused: (state: boolean) => boolean;
}

export const Search = ({ isFocused, setIsFocused }: ISearch) => {
  const getSearch = useAppSelector((state) => state.product.currentSearch);
  const [search, setSearch] = useState<string>(getSearch);
  const dispath = useAppDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleAddItem = (event: ChangeEvent<HTMLInputElement> | any) => {
    event.preventDefault();
    dispath(addItem(search.toLocaleLowerCase()));
    dispath(currentSearch(search));
    dispath(searchMobile(false));
    dispath(filterItems(search));

  };

  const clearInput = (event: MouseEventHandler<HTMLButtonElement> | any) => {
    setSearch('');
    dispath(currentSearch(''));
    event.preventDefault();
  };

  const handleBlur = () => {
    setIsFocused(!isFocused);
  };

  const currentRouter = '/'

  const searchEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 13) {
      if (currentRouter) {

        setTimeout(() => {
          dispath(filterItems(search));
        }, 300);
      }

      dispath(filterItems(search));
    }
  };


  return (<CardSearch width={
    isFocused ? '400px' : '250px'
  }
  >
    <IconLupa src={
      ICONS.Search
    }
      alt='icone lupa' />
    <input type='text' placeholder='Buscar'
      value={search}
      onChange={handleChange}
      onBlur={handleBlur}
      onFocus={handleBlur}
      onKeyDown={searchEnter} /> {
      search && (<button type='button' title='icon'
        onClick={clearInput}>
        <Image src={
          ICONS.Close
        }
          alt='icone X' />
      </button>)
    }
    {
      search && (<ButtonSearchMobile type='submit'
        onClick={handleAddItem}>
        Buscar
      </ButtonSearchMobile>)
    } </CardSearch>);
};
