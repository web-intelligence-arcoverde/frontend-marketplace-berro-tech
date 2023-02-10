import { useRouter } from "next/router";
import { ContainerNavigation, ItemNavigation, Row } from "./style";
import Link from "next/link";
import Image from "next/image";
import { ICONS } from "@/assets";

export const FooterMenuNavigation = () => {
  const router = useRouter();

  let optionBussiness = router.asPath === "/negocios";
  let styleBussiness = optionBussiness ? "brightness" : "";

  let optionAbout = router.asPath === "/sobre";
  let styleAbout = optionAbout ? "brightness" : "";

  let optionSuporte = router.asPath === "/suport";
  let styleSuport = optionSuporte ? "brightness" : "";

  const goTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <ContainerNavigation>
      <ItemNavigation>
        <Link href="/negocios">
          <li id={styleBussiness}>Negócios</li>
          {optionBussiness && <Row />}
        </Link>
      </ItemNavigation>
      <ItemNavigation>
        <Link href="/sobre">
          <li id={styleAbout}>Sobre nós</li>
          {optionAbout && <Row />}
        </Link>
      </ItemNavigation>
      <ItemNavigation>
        <Link href="/suport">
          <li id={styleSuport}>Suporte</li>
          {optionSuporte && <Row />}
        </Link>
      </ItemNavigation>
      <ItemNavigation>
        <Image onClick={goTop} src={ICONS.ArrowUp} alt="seta para cima" />
      </ItemNavigation>
    </ContainerNavigation>
  );
};
