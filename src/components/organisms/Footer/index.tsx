import { ICONS } from "@/assets";
import { LogoCopyright } from "@/components/atoms";
import { FooterMenuNavigation } from "@/components/molecules";
import Image from "next/image";

import Link from "next/link";
import {
  CardCopyright,
  CardFlex,
  ContainerFooter,
  Flex,
  CardLogo,
  MaxContainer,
} from "./style";

export const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const goTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <MaxContainer>
      <ContainerFooter>
        <CardLogo>
          <LogoCopyright />
          <Image
            id="arrow-up"
            onClick={goTop}
            src={ICONS.ArrowUp}
            alt="icone de seta pra cima"
          />
        </CardLogo>
        <CardFlex>
          <CardCopyright>
            <Link href={"#"}>&#169; {currentYear} BerroTech </Link>
            <Link href={"#"}>Política de prinvacidade</Link>
            <Link href={"#"}>Develop by WebIntelligence</Link>
          </CardCopyright>
          <Flex>
            <FooterMenuNavigation />
          </Flex>
        </CardFlex>
      </ContainerFooter>
    </MaxContainer>
  );
};
