import { Search } from "@/components/atoms";
import { useState } from "react";
import { ContainerSearchMobile, CardSearch } from "./style";

export const SearchMobile = () => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <ContainerSearchMobile>
      <CardSearch>
        {
          //@ts-ignore
          <Search isFocused={isFocused} setIsFocused={setIsFocused} />
        }
      </CardSearch>
    </ContainerSearchMobile>
  );
};
