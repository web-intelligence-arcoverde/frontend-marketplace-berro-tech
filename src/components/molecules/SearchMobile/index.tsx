import { ICONS } from "@/assets";
import { Search } from "@/components/atoms";
import { useAppDispatch, useAppSelector } from "@/hooks/useSelectorHook";
import { removeItem } from "@/store/reducer/user/actions";
import Image from "next/image";
import { useState } from "react";
import { ContainerSearchMobile, CardSearch, LastSearchs } from "./style";

export const SearchMobile = () => {
  const [isFocused, setIsFocused] = useState(false);
  const dispatch = useAppDispatch();
  const handleRemoveClick = (item: any) => {
    dispatch(removeItem(item));
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
        {lastSearchs.map((search, index) => (
          <li key={index}>
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
