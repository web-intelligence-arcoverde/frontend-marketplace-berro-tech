import { ICONS } from "@/assets";
import { MocksSteps } from "@/mock";
import { ReactNode } from "react";
import { CattleCard, CattleInfoContainer } from "../ProductCard/style";
import React from "react";

import {
  Arrow,
  CardChildren,
  Container,
  Title,
  CardTitle,
  CardSteps,
  Content,
} from "./style";

interface LayoutSectionPros {
  children: ReactNode;
  title: string;
  helperText?: string;
}

export const LayoutSection = ({
  title,
  children,
  helperText,
}: LayoutSectionPros) => {
  return (
    <Container>
      <Content>
        <CardTitle>
          <Title>{title}</Title>
          <Arrow id="arrow" src={ICONS.ArrowBlue} alt="seta" />
        </CardTitle>
        {helperText && <p>{helperText}</p>}

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
      </Content>
      <CardChildren>{children}</CardChildren>
    </Container>
  );
};
