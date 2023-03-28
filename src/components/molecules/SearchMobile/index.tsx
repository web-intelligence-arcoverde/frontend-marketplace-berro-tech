import { ICONS } from "@/assets";
import { Search } from "@/components/atoms";
import { useAppDispatch, useAppSelector } from "@/hooks/useSelectorHook";
import {
  currentSearch,
  filterItems,
  removeItem,
  searchMobile,
} from "@/store/reducer/user/actions";
import Image from "next/image";
import { useState } from "react";
import { ContainerSearchMobile, CardSearch, LastSearchs } from "./style";

export const SearchMobile = () => {
  const [isFocused, setIsFocused] = useState(false);
  const dispatch = useAppDispatch();
  const handleRemoveClick = (item: any) => {
    dispatch(removeItem(item));
  };

  const getNameFilter = (event: string) => {
    dispatch(currentSearch(""));
    dispatch(filterItems(event));
    dispatch(searchMobile(false));
  };

  const lastSearchs = useAppSelector((state) => state.user.lastSearchs);

  return (
    <ContainerSearchMobile>
      <CardSearch>
        {
          //@ts-ignore
          <Search isFocused={isFocused} setIsFocused={setIsFocused} />
        }
      </CardSearch>
      <LastSearchs>
        {lastSearchs.length > 0 && <h6>Recentes</h6>}
        {lastSearchs.slice(0, 5).map((search, index) => (
          <li
            onClick={() => {
              getNameFilter(search);
            }}
            key={index}
          >
            {search}
            <Image
              onClick={() => {
                handleRemoveClick(search);
              }}
              src={ICONS.Excluir}
              alt="excluir"
            />
          </li>
        ))}
      </LastSearchs>
    </ContainerSearchMobile>
  );
};
