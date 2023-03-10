import styled from "styled-components";
import { BREAKPOINTS, COLORS } from "@/common";
import { CardButton } from "@/components/atoms/Button/style";

export const Main = styled.main`
  width: 100%;
  max-width: ${BREAKPOINTS.xxg};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const ButtonAddProduct = styled(CardButton)`
  background-color: ${COLORS.sub_brand._02};
  color: ${COLORS.light._05};
  width: 100%;

  @media (max-width: ${BREAKPOINTS.lg}) {
    display: none;
  }
`;
export const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  .tabs {
    border-bottom: 1px solid ${COLORS.light._02};
    display: flex;
    padding-bottom: 16px;
    .tab {
      border-radius: 5px;
      cursor: pointer;
      font-weight: 400;
      font-size: 16px;
      color: ${COLORS.gray._03};
      padding: 12px 24px;
    }
    .active {
      font-weight: 500;
      color: ${COLORS.brand_dark._03};
      background: ${COLORS.brand_light._03};
    }
  }
  flex-direction: column;
  @media (max-width: ${BREAKPOINTS.lg}) {
    width: 100%;
    .tabs {
      width: 100%;
      border-bottom: none;
      padding-bottom: 0;
      .tab {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export const StyleDesktop = styled.div`
  @media (max-width: ${BREAKPOINTS.md}) {
    display: none;
  }
`;
export const StyleMobile = styled.div`
  display: none;
  @media (max-width: ${BREAKPOINTS.md}) {
    display: block;
  }
`;
