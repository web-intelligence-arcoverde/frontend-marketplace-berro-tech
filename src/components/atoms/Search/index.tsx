import Image from "next/image";
import { ICONS } from "@/assets";
import { ButtonSearchMobile, CardSearch, IconLupa } from "./style";
import { ChangeEvent, MouseEventHandler, useState } from "react";
import { initialState } from "@/store/reducer/user/initial";
import { addItem } from "@/store/reducer/user/actions";
import { useAppDispatch } from "@/hooks/useSelectorHook";

interface ISearch {
  isFocused: boolean;
  setIsFocused: (state: boolean) => boolean;
}

export const Search = ({ isFocused, setIsFocused }: ISearch) => {
  const [search, setSearch] = useState("");
  const dispath = useAppDispatch()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const teste = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    dispath(addItem(search))
    console.log(initialState);
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
      />
      {search && (
        <button onClick={clearInput}>
          <Image src={ICONS.Close} alt="icone X" />
        </button>
      )}
      {search && (
        <ButtonSearchMobile type="submit" onClick={teste}>
          Buscar
        </ButtonSearchMobile>
      )}
    </CardSearch>
  );
};
