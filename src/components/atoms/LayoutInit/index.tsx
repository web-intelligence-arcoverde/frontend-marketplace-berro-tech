import { ICONS } from "@/assets";
import Image from "next/image";
import { ReactNode } from "react";
import { ContainerChildren, Main } from "./style";

interface LayoutInitProps {
  children: ReactNode;
}

const LayoutInit = ({ children }: LayoutInitProps) => {
  return (
    <Main>
      <Image src={ICONS.SimboloBackground} alt="simbolo berro tech" />
      <ContainerChildren>{children}</ContainerChildren>
    </Main>
  );
};

export default LayoutInit;
