import { ICONS } from "@/assets";
import { ProductCard, Tabs } from "@/components";
import Image from "next/image";
import { ChangeEvent, useEffect, useRef, useState } from "react";
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
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearch(value);
  };

  const topSearches = useAppSelector((state) => state.product.topSearches);
  const filterSelected = useAppSelector(
    (state) => state.product.topSearchesFilter
  );
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        event.preventDefault();
        sendFilter();
      }
    };

    inputRef.current?.addEventListener("keydown", handleKeyDown);

    return () => {
      inputRef.current?.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  const sendFilter = () => {
    console.log(`${filterSelected}&${search}`);
  };

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
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                sendFilter();
              }
            }}
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
