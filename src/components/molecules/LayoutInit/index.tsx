import { ICONS } from "@/assets";
import { ReactNode } from "react";
import { ContainerChildren, Main, StyleImage } from "./style";

interface LayoutInitProps {
  children: ReactNode;
}

export const LayoutInit = ({ children }: LayoutInitProps) => {
  return (
    <Main>
      <StyleImage src={ICONS.SimboloBackground} alt="simbolo berro tech" />
      <ContainerChildren>{children}</ContainerChildren>
    </Main>
  );
};
