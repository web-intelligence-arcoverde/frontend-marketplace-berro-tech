import Image from "next/image";
import { ICONS } from "@/assets";
import { CardSearch } from "./style";

const Search = () => {
  return (
    <CardSearch>
      <Image src={ICONS.Search} alt="icone lupa" />
      <input type="text" placeholder="Search" />
    </CardSearch>
  );
};

export default Search;
