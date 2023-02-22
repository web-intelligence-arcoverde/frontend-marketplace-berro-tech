import Image from "next/image";
import { useAppSelector } from "@/hooks/useSelectorHook";
import { ICONS, IMAGES } from "@/assets";
import { ButtonLink, MenuNavigationMobile, SearchMobile } from "@/components";

import {
  ButtonMenu,
  CardAvatar,
  CardButton,
  CardMenuMobile,
  CardIcons,
} from "./style";
import { useState } from "react";

export const AvatarContainer = () => {
  const token = useAppSelector((state) => state.user.token);
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState(false);
  const [container, setContainer] = useState(true);

  const handleModal = () => {
    setModal(!modal);
    setContainer(!container);
  };
  const handleSearch = () => {
    setSearch(!search);
    setContainer(!container);
  };
  const handleContainer = () => {
    setContainer(!container);
    setSearch(false);
    setModal(false);
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
            {container ? (
              <>
                <CardIcons>
                  <Image
                    onClick={handleSearch}
                    src={ICONS.Search}
                    alt="icone lupa"
                  />
                </CardIcons>
                <ButtonMenu onClick={handleModal}>
                  <Image src={ICONS.Menu} alt="icone do menu" />
                </ButtonMenu>
              </>
            ) : (
              <CardIcons>
                <Image
                  onClick={handleContainer}
                  src={ICONS.Excluir}
                  alt="close"
                />
              </CardIcons>
            )}
            {modal && <MenuNavigationMobile />}
            {search && <SearchMobile />}
          </CardMenuMobile>
        </>
      )}
    </>
  );
};
