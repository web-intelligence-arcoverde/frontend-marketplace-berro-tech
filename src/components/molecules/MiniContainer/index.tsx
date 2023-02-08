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
import { Button } from "@/components/atoms";

interface MiniContainerProps {
  title: string;
  subTitle: string;
  children: ReactNode;
  lastButton: string;
}

const MiniContainer = ({
  title,
  subTitle,
  children,
  lastButton,
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
        <Button onClick={() => {}}>{lastButton}</Button>
      </CardButton>
    </Container>
  );
};

export default MiniContainer;
