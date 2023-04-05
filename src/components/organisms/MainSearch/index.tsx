import { ICONS } from "@/assets";
import { ProductCard, Tabs } from "@/components";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import {
  Container,
  SearchSideBar,
  SearchResponseContainer,
  InputSearchBar,
  InputContainer,
} from "./style";
import { useAppSelector } from "@/hooks/useSelectorHook";
import { tabs } from "@/mock";

export const MainSearch = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearch(value);
  };
  const topSearches = useAppSelector((state) => state.product.topSearches);

  return (
    <Container>
      <SearchSideBar>
        <h2>
          Encontre <br />o que procura
        </h2>
        <InputContainer>
          <Image src={ICONS.Search} alt="Icone de pesquisa" />
          <InputSearchBar
            name={"search"}
            type={"text"}
            placeholder="Buscar"
            onChange={handleChange}
          />
        </InputContainer>
        <Tabs tabs={tabs} />
      </SearchSideBar>
      <SearchResponseContainer>
        {topSearches.slice(0, 4).map((item: any, index: number) => (
          <ProductCard
            key={`${item.name} ${index}`}
            {...item}
            width="48.5%"
            maxWidth="none"
            widthTablet="80%"
          />
        ))}
      </SearchResponseContainer>
    </Container>
  );
};
