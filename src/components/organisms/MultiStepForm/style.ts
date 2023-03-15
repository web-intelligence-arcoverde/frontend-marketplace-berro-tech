import { Content } from "./../../../style/minhas-publicacoes-style";
import { COLORS } from "@/common";
import styled from "styled-components";

export const LayoutRegisterConfig = styled.main`
  display: flex;
  flex-direction: column;
  width: 800px;
  border-radius: 5px 5px 0 0;
  background: ${COLORS.light._05};
  padding: 24px 0;
`;

export const HeaderMultiSteps = styled.header`
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
export const TitleStep = styled.h2`
  font-size: 16px;
  color: ${COLORS.gray._01};
  font-weight: 500;
  margin-bottom: 24px;
`;

export const ContentStep = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
`;
