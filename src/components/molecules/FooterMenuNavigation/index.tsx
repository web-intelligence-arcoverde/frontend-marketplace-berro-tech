import React from "react";
import { useRouter } from "next/router";
import { ContainerNavigation, ItemNavigation, Row } from "./style";
import Link from "next/link";
import Image from "next/image";
import { ICONS } from "@/assets";
import { MockNavigation } from "@/mock";

export const FooterMenuNavigation = () => {
  const router = useRouter();

  const goTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <ContainerNavigation>
      {MockNavigation.map((nav, index) => (
        <ItemNavigation key={index}>
          <Link href={nav.link} id={nav.link === router.asPath ? "active" : ""}>
            {nav.name}
          </Link>
          {nav.link === router.asPath && <Row />}
        </ItemNavigation>
      ))}
      <ItemNavigation>
        <Image onClick={goTop} src={ICONS.ArrowUp} alt="seta para cima" />
      </ItemNavigation>
    </ContainerNavigation>
  );
};
