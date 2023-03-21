import { Content } from "./../../../style/minhas-publicacoes-style";
import { BREAKPOINTS, COLORS } from "@/common";
import styled from "styled-components";

export const LayoutRegisterConfig = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  height: 720px;
  border-radius: 5px 5px 0 0;
  background: ${COLORS.light._05};
  padding-top: 24px;
 @media (max-width:${BREAKPOINTS.md}) {
  width: 100%;
  height: 100%;
 }
`;

export const HeaderMultiSteps = styled.div`
  display: flex;
  justify-content: space-between;

  * {
    width: 50%;
    padding-left: 6px;
  }
  h6 {
    color: ${COLORS.gray._04};
    font-size: 14px;
    font-weight: 400;
  }
  h4 {
    margin-top: 8px;
    color: ${COLORS.gray._03};
    font-size: 16px;
    font-weight: 400;
    width: auto;
  }

  .active {
    border-bottom: 2px solid ${COLORS.brand_light._01};
    padding-bottom: 12px;
    h4 {
      font-family: 500;
      color: ${COLORS.gray._01};
    }
  }
`;

export const ContentStep = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
