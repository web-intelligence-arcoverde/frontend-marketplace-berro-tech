import Image from "next/image";
import { ICONS } from "@/assets";
import { CardSearch, IconLupa } from "./style";
import { ChangeEvent, MouseEventHandler, useState } from "react";

export const Search = () => {
  const [search, setSearch] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const ClearInput = (event: MouseEventHandler<HTMLButtonElement> | any) => {
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
        <button onClick={ClearInput}>
          <Image src={ICONS.Close} alt="icone X" />
        </button>
      )}
    </CardSearch>
  );
};
