import styled from "styled-components";
import { BREAKPOINTS, COLORS } from "@/common";

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 12px;
  #to-enter {
    width: 200px;
    height: 48px;
    background-color: ${COLORS.brand_dark._03};
    color: ${COLORS.light._05};
    font-weight: 500;
  }
`;

export const CardSearch = styled.div`
  @media (max-width:${BREAKPOINTS.sm}) {
    display: none;
  }
`;
