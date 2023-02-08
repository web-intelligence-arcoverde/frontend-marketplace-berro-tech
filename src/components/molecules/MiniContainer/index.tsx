import Image from "next/image";
import { ReactNode } from "react";
import {
  CardButton,
  Container,
  Header,
  Row,
  Texts,
  CardChildren,
} from "./style";
import { ICONS } from "@/assets";
import { ButtonLink } from "@/components/atoms";

interface MiniContainerProps {
  title: string;
  subTitle: string;
  children: ReactNode;
  lastButton: string;
  lastButtonLink: string;
  loginWithEmail?: boolean;
}

const MiniContainer = ({
  title,
  subTitle,
  children,
  lastButton,
  lastButtonLink,
  loginWithEmail,
}: MiniContainerProps) => {
  return (
    <Container>
      <Header>
        <Texts>
          <h4>{title}</h4>
          <h5>{subTitle}</h5>
        </Texts>
        <Image src={ICONS.Hands} alt="icone boas vindas" />
      </Header>
      <Row />
      <CardChildren>{children}</CardChildren>
      <Row />
      <CardButton>
        <ButtonLink link={lastButtonLink}>
          {!loginWithEmail && <Image src={ICONS.User} alt="icone do usuário" />}
          {lastButton}
        </ButtonLink>
      </CardButton>
    </Container>
  );
};

export default MiniContainer;
