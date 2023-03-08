import { ICONS, IMAGES } from "@/assets";
import { Button } from "@/components";
import { UserPerfil } from "@/types/IUserProps";
import Image from "next/image";
import {
  CardVendedor,
  HeaderCard,
  ImagePerfil,
  Aside,
  TitleSection,
  CardSection,
  InfoSeller,
  RowVertical,
} from "./style";

export const CardPerfilVendedor = ({
  name,
  email,
  location,
  phoneNumber,
  avaliation,
}: UserPerfil) => {
  return (
    <CardVendedor>
      <HeaderCard>
        <ImagePerfil src={IMAGES.Avatar} alt="perfil do vendedor " />
        <Aside>
          <h5>{name}</h5>
          <TitleSection>{email}</TitleSection>
          <Button onClick={() => {}}>Minha conta</Button>
        </Aside>
      </HeaderCard>
      <CardSection>
        <TitleSection>Localização</TitleSection>
        {location ? (
          <h5>{location}</h5>
        ) : (
          <button>Adicione uma localização</button>
        )}
      </CardSection>
      <InfoSeller>
        <CardSection>
          <TitleSection>Telefone</TitleSection>
          <h5>{phoneNumber}</h5>
        </CardSection>
        <RowVertical></RowVertical>
        <CardSection>
          <TitleSection>Avaliações</TitleSection>
          <h5>
            {avaliation}
            <Image src={ICONS.StarYellow} alt="estrela de pontuação" />
          </h5>
        </CardSection>
      </InfoSeller>
    </CardVendedor>
  );
};
