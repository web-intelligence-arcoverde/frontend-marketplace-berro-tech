import Image from "next/image";
import { useAppSelector } from "@/hooks/useSelectorHook";
import { ICONS, IMAGES } from "@/assets";
import { ButtonLink, MenuNavigationMobile, SearchMobile } from "@/components";

import {
  ButtonMenu,
  CardAvatar,
  CardButton,
  CardMenuMobile,
  IconSearch,
} from "./style";
import { useState } from "react";

export const AvatarContainer = () => {
  const token = useAppSelector((state) => state.user.token);
  const [modal, setModal] = useState(false);
  const [search,setSearch] = useState(false)
  const handleModal = () => {
    setModal(!modal);
  };
  const handleSearch = () => {
    setSearch(!search);
  };

  return (
    <>
      {!!token ? (
        <CardAvatar>
          <Image src={IMAGES.Avatar} alt="foto perfil" />
        </CardAvatar>
      ) : (
        <>
          <CardButton>
            <ButtonLink id="to-enter" link="entrar">
              Entrar
            </ButtonLink>
          </CardButton>
          <CardMenuMobile>
            <IconSearch>
              <Image
                onClick={handleSearch}
                src={ICONS.Search}
                alt="icone lupa"
              />
              {search && <SearchMobile />}
            </IconSearch>
            <ButtonMenu onClick={handleModal}>
              <Image src={ICONS.Menu} alt="icone do menu" />
              {modal && <MenuNavigationMobile />}
            </ButtonMenu>
          </CardMenuMobile>
        </>
      )}
    </>
  );
};
