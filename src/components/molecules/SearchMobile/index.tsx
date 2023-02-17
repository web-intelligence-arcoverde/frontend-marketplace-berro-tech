import { ICONS } from "@/assets";
import { Search } from "@/components/atoms";
import Image from "next/image";
import { useState } from "react";
import { ContainerSearchMobile, CardSearch, LastSearchs } from "./style";

export const SearchMobile = () => {
  const [isFocused, setIsFocused] = useState(false);

  const array = [
    { name: "Garrote Senepol" },
    { name: "Bezerro Anelorado" },
    { name: "Nelore Macho" },
  ];
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
        {array.map((search, index) => (
          <li key={index}>
            {search.name} <Image src={ICONS.Excluir} alt="excluir" />
          </li>
        ))}
      </LastSearchs>
    </ContainerSearchMobile>
  );
};
