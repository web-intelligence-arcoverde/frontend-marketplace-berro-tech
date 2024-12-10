'use client'

import { ICONS } from "@/assets";
import { Search } from "@/components/atoms";
import { useAppDispatch, useAppSelector } from "@/hooks/useSelectorHook";
import {
  currentSearch,
  filterItems,
  getAllProducts,
  removeItem,
  searchMobile,
} from "@/store/reducer/product/actions";

import Image from "next/image";
import { useState } from "react";
import { ContainerSearchMobile, CardSearch, LastSearchs } from "./style";
import React from 'react';

export const SearchMobile = () => {
  const [isFocused, setIsFocused] = useState(false);
  const dispatch = useAppDispatch();
  const handleRemoveClick = (item: string) => {
    dispatch(removeItem(item));
  };

  const getNameFilter = (event: string) => {
    dispatch(currentSearch(""));
    dispatch(getAllProducts());
    dispatch(filterItems(event));
    dispatch(searchMobile(false));
    dispatch(currentSearch(event));
  };

  const lastSearchs = useAppSelector((state) => state.product.lastSearchs);

  return (
    <ContainerSearchMobile>
      <CardSearch>
        {
          //@ts-expect-error: Error
          <Search isFocused={isFocused} setIsFocused={setIsFocused} />
        }
      </CardSearch>
      <LastSearchs>
        {lastSearchs.length > 0 && <h6>Recentes</h6>}
        {lastSearchs.slice(0, 5).map((search: string, index: string) => (
          <li
            onClick={() => {
              getNameFilter(search);
            }}
            key={index}
          >
            {search}
            <span
              onClick={(event) => {
                event.stopPropagation();
                handleRemoveClick(search);
              }}
            >
              <Image src={ICONS.Excluir} alt="excluir" />
            </span>
          </li>
        ))}
      </LastSearchs>
    </ContainerSearchMobile>
  );
};
