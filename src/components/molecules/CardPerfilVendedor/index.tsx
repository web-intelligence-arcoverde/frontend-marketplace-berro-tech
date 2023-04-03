import { ICONS, IMAGES } from "@/assets";
import { Button, Modal, MultiStepForm, RegisterProduct } from "@/components";
import { UserPerfil } from "@/types/IUserProps";
import Image from "next/image";
import {
  CardVendedor,
  HeaderCard,
  ImagePerfil,
  Aside,
  TextGray,
  CardSection,
  InfoSeller,
  RowVertical,
} from "./style";
import { useState } from "react";
import { StepEditAccount } from "@/mock";
import useModalOverflow from "@/hooks/useModalOverflow";

export const CardPerfilVendedor = ({
  name,
  email,
  location,
  phoneNumber,
  avaliation,
}: UserPerfil) => {
  const [modal, setModal] = useState(false);
  const registerProduct = () => {
    setModal(!modal);
  };
  useModalOverflow(modal, registerProduct);
  return (
    <CardVendedor>
      <HeaderCard>
        <ImagePerfil src={IMAGES.Avatar} alt="perfil do vendedor " />
        <Aside>
          <h5>{name}</h5>
          <TextGray>{email}</TextGray>
          <Button onClick={registerProduct}>Minha conta</Button>
        </Aside>
      </HeaderCard>
      <CardSection>
        <TextGray>Localização</TextGray>
        {location ? (
          <h5>{location}</h5>
        ) : (
          <button>Adicione uma localização</button>
        )}
      </CardSection>
      <InfoSeller>
        <CardSection>
          <TextGray>Telefone</TextGray>
          <h5>{phoneNumber}</h5>
        </CardSection>
        <RowVertical></RowVertical>
        <CardSection>
          <TextGray>Avaliações</TextGray>
          <h5>
            {avaliation}
            <Image src={ICONS.StarYellow} alt="estrela de pontuação" />
          </h5>
        </CardSection>
      </InfoSeller>
      {modal && (
          <Modal onClick={registerProduct}>
            <MultiStepForm
            steps={StepEditAccount}
            registerProduct={()=>registerProduct()}
            />
          </Modal>
        )}
    </CardVendedor>
  );
};
