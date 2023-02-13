import styled from "styled-components";
import { COLORS, BREAKPOINTS } from "@/common";

export const ContainerFooter = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 66px 100px 26px 100px;
  background-color: ${COLORS.light._04};
  gap: 16px;
  min-height: 200px;
  @media (max-width: ${BREAKPOINTS.sm}) {
    padding: 60px 0;
    height: auto;
    min-height: 0;
  }
`;

export const CardCopyright = styled.ul`
  display: flex;
  gap: 32px;
  a {
    color: ${COLORS.gray._03};
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    flex-wrap: wrap;
    width: 100%;
    font-size: 13px;
    justify-content: center;
    gap: 28px 30px;
    border-top: 2px solid ${COLORS.light._02};
    padding: 50px 20px 0 20px;
  }
`;
export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const CardFlex = styled(Flex)`
  @media (max-width: ${BREAKPOINTS.sm}) {
    flex-direction: column-reverse;
  }
`;
export const CardLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${BREAKPOINTS.sm}) {
    #arrow-up {
      display: none;
    }
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    padding: 6px 20px;
  }
`;
