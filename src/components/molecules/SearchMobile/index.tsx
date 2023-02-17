import { ICONS } from "@/assets";
import { Search } from "@/components/atoms";
import { useAppSelector } from "@/hooks/useSelectorHook";
import { initialState } from "@/store/reducer/user/initial";
import Image from "next/image";
import { useState } from "react";
import { ContainerSearchMobile, CardSearch, LastSearchs } from "./style";

export const SearchMobile = () => {
  const [isFocused, setIsFocused] = useState(false);

  const lastSearchs = useAppSelector((state)=>state.user.lastSearchs)

  return (
    <ContainerSearchMobile>
      <CardSearch>
        {
          //@ts-ignore
          <Search isFocused={isFocused} setIsFocused={setIsFocused} />
        }
      </CardSearch>
      <LastSearchs>
        <h6>Recentes</h6>
        {lastSearchs.map((search: string) => (
          <li>
            {search} <Image src={ICONS.Excluir} alt="excluir" />
          </li>
        ))}
      </LastSearchs>
    </ContainerSearchMobile>
  );
};
