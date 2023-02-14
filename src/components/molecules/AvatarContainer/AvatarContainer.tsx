import Image from "next/image";
import { useAppSelector } from "@/hooks/useSelectorHook";
import { ICONS, IMAGES } from "@/assets";
import { ButtonLink } from "@/components";

import { ButtonMenu, CardAvatar, CardButton, CardMenuMobile } from "./style";

export const AvatarContainer = () => {
  const token = useAppSelector((state) => state.user.token);

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
            <ButtonMenu>
              <Image src={ICONS.Menu} alt="icone do menu" />
            </ButtonMenu>
          </CardMenuMobile>
        </>
      )}
    </>
  );
};
