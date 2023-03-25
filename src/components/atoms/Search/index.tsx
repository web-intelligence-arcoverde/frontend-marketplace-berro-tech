import Image from "next/image";
import { ICONS } from "@/assets";
import { ButtonSearchMobile, CardSearch, IconLupa } from "./style";
import { ChangeEvent, MouseEventHandler, useEffect, useState } from "react";
import {
  addItem,
  filterItems,
  productsWithOutFilters,
} from "@/store/reducer/user/actions";
import { useAppDispatch } from "@/hooks/useSelectorHook";
import { KeyboardEvent } from "react";
import { useRouter } from "next/router";
import {} from '../'
interface ISearch {
  isFocused: boolean;
  setIsFocused: (state: boolean) => boolean;
}


export const Search = ({ isFocused, setIsFocused }: ISearch) => {
  const [search, setSearch] = useState("");
  const dispath = useAppDispatch();
  useEffect(() => {
    if (!search) {
      dispath(productsWithOutFilters(''));
    }
  }, [search,dispath]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleAddItem = (event: ChangeEvent<HTMLInputElement> | any) => {
    event.preventDefault();
    dispath(addItem(search.toLocaleLowerCase()));
  };

  const clearInput = (event: MouseEventHandler<HTMLButtonElement> | any) => {
    setSearch("");
    event.preventDefault();
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const router = useRouter();
  const currentRouter = router.asPath;

  const searchEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 13) {
      if (currentRouter !== "/negocios") {
        router.push("/negocios");
        dispath(filterItems(search));
      }
      dispath(filterItems(search));
    }
  };

  return (
    <CardSearch
      width={isFocused ? "400px" : "250px"}
      borderInput={search ? "8px 0 0 8px" : "8px"}
      borderRight={search && "none"}
    >
      <IconLupa src={ICONS.Search} alt="icone lupa" />
      <input
        type="text"
        placeholder="Buscar"
        value={search}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onKeyDown={searchEnter}
      />
      {search && (
        <button type="button" onClick={clearInput}>
          <Image src={ICONS.Close} alt="icone X" />
        </button>
      )}
      {search && (
        <ButtonSearchMobile type="submit" onClick={handleAddItem}>
          Buscar
        </ButtonSearchMobile>
      )}
    </CardSearch>
  );
};
