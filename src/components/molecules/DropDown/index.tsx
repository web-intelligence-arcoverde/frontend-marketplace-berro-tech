import { ICONS } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { StyleDropDown } from "./style";

export const DropDown = () => {
  const Exit = () => {
    localStorage.removeItem("token");
  };
  return (
    <StyleDropDown>
      <li>
        <Image src={ICONS.MyPulblication} alt="minhas pulblicações" />
        <Link href='./minhas-publicacoes'> Minhas publicações</Link>
      </li>
      <li>
        <Image src={ICONS.Exit} alt="minhas pulblicações" />
        <span onClick={Exit}>Sair</span>
      </li>
    </StyleDropDown>
  );
};
