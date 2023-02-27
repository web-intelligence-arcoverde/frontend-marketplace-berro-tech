import { ICONS } from "@/assets";
import Image from "next/image";
import { StyleDropDown } from "./style";

export const DropDown = () => {
  return (
    <StyleDropDown>
      <li>
        <Image src={ICONS.MyPulblication} alt="minhas pulblicações" />
       <span> Minhas publicações</span>
      </li>
      <li>
        <Image src={ICONS.Exit} alt="minhas pulblicações" />
        <span>Sair</span>
      </li>
    </StyleDropDown>
  );
};
