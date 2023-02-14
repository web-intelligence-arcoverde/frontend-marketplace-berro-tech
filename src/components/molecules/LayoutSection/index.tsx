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
  FirstCard
} from "./style";

interface LayoutSectionPros {
  children: ReactNode;
  title: string;
  helperText: string;
}

export const LayoutSection = ({
  title,
  children,
  helperText,
}: LayoutSectionPros) => {
  return (
    <Container>
      <FirstCard>
        <CardTitle>
          <Title>{title}</Title>
          <Arrow id="arrow" src={ICONS.ArrowBlue} alt="seta" />
        </CardTitle>
        <p>{helperText}</p>
        <CardSteps>
          {MocksSteps.map((step, index) => (
            <CattleInfoContainer key={index}>
              <CattleCard>
                <h5>{step.pass}</h5>
                <h6>{step.value}</h6>
              </CattleCard>
            </CattleInfoContainer>
          ))}
        </CardSteps>
      </FirstCard>
      <CardChildren>{children}</CardChildren>
    </Container>
  );
};
