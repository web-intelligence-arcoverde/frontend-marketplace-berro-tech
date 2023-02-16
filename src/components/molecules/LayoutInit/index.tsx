import { ICONS } from "@/assets";
import Image from "next/image";
import { ReactNode } from "react";
import { ContainerChildren, Main, StyleImage, StyleImageMobile } from "./style";

interface LayoutInitProps {
  children: ReactNode;
}

export const LayoutInit = ({ children }: LayoutInitProps) => {
  return (
    <Main>
      <StyleImage src={ICONS.SimboloBackground} alt="simbolo berro tech" />
      <StyleImageMobile>
        <Image src={ICONS.SimboloBackgroundMobile} alt="simbolo berro tech"/>
      </StyleImageMobile>
      <ContainerChildren>{children}</ContainerChildren>
    </Main>
  );
};
