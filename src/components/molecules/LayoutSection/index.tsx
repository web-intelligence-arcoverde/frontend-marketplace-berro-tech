import { ICONS } from "@/assets";
import { MocksSteps } from "@/mock";
import { ReactNode } from "react";
import { CattleCard, CattleInfoContainer } from "../ProductCard/style";
import {
  Arrow,
  CardChildren,
  Container,
  Title,
  CardTitle,
  CardSteps,
} from "./style";

interface LayoutSectionPros {
  children: ReactNode;
  title: string;
  changeSide: boolean;
  helperText: string;
  direction: boolean;
}

export const LayoutSection = ({
  title,
  children,
  changeSide,
  helperText,
  direction,
}: LayoutSectionPros) => {
  return (
    <Container changeSide={changeSide}>
      <div>
        <CardTitle direction={direction}>
          <Title>{title}</Title>
          <Arrow changeSide={changeSide} src={ICONS.ArrowBlue} alt="seta" />
        </CardTitle>
        <p>{helperText}</p>
        <CardSteps>
          {/* {MocksSteps.map((step) => (
            <CattleInfoContainer>
              <CattleCard>
                <h5>{step.pass}</h5>
                <h6>{step.value}</h6>
              </CattleCard>
            </CattleInfoContainer>
          ))} */}
        </CardSteps>
      </div>
      <CardChildren>{children}</CardChildren>
    </Container>
  );
};
