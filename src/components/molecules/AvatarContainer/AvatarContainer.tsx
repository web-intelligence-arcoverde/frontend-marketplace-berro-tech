import Image from "next/image";
import { useAppSelector } from "@/hooks/useSelectorHook";
import { ICONS, IMAGES } from "@/assets";
import {
  ButtonLink,
  DropDown,
  MenuNavigationMobile,
  SearchMobile,
} from "@/components";

import {
  ButtonMenu,
  CardAvatar,
  CardButton,
  CardMenuMobile,
  CardIcons,
  StyleAvatar,
  CardDropDown,
  CardArrowUp,
} from "./style";
import { useState } from "react";

export const AvatarContainer = () => {
  const token = useAppSelector((state) => state.user.token);
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState(false);
  const [container, setContainer] = useState(true);
  const [openDropDown, setOpenDropDown] = useState(false);

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
  const handleDropDown = () => {
    setOpenDropDown(!openDropDown);
  };

  return (
    <>
      {!token ? (
        <CardAvatar>
          {openDropDown ? (
            <>
              <CardArrowUp onClick={handleDropDown}>
                <Image src={ICONS.Up} alt="arrowUp" />
              </CardArrowUp>
              <CardDropDown>
                <DropDown />
              </CardDropDown>
            </>
          ) : (
            <StyleAvatar
              onClick={handleDropDown}
              src={IMAGES.Avatar}
              alt="foto perfil"
            />
          )}
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
