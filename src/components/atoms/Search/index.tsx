import Image from "next/image";
import { ICONS } from "@/assets";
import { ButtonSearchMobile, CardSearch, IconLupa } from "./style";
import { ChangeEvent, MouseEventHandler, useEffect, useState } from "react";
import {
  addItem,
  currentSearch,
  filterItems,
  productsWithOutFilters,
} from "@/store/reducer/user/actions";
import { useAppDispatch, useAppSelector } from "@/hooks/useSelectorHook";
import { KeyboardEvent } from "react";
import { useRouter } from "next/router";
interface ISearch {
  isFocused: boolean;
  setIsFocused: (state: boolean) => boolean;
}

export const Search = ({ isFocused, setIsFocused }: ISearch) => {

  const getSearch = useAppSelector((state) => state.user.currentSearch);
  const [search, setSearch] = useState<string>(getSearch);
  const dispath = useAppDispatch();
  useEffect(() => {
   
    if (currentRouter !== "/negocios") {
      setSearch("");
    }
  }, []);
  useEffect(() => {
    if (!search) {
      dispath(productsWithOutFilters());
    }
  }, [search, dispath]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleAddItem = (event: ChangeEvent<HTMLInputElement> | any) => {
    event.preventDefault();
    dispath(addItem(search.toLocaleLowerCase()));
    dispath(currentSearch(search))
  };

  const clearInput = (event: MouseEventHandler<HTMLButtonElement> | any) => {
    setSearch("");
    dispath(currentSearch(''))
    event.preventDefault();
  };

  const handleBlur = () => {
    setIsFocused(!isFocused);
  };

  const router = useRouter();
  const currentRouter = router.asPath;

  const searchEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 13) {
      if (currentRouter !== "/negocios") {
        router.push("/negocios");
        setTimeout(() => {
          dispath(filterItems(search));
        }, 300);
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
        onFocus={handleBlur}
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
