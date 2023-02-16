import { BREAKPOINTS, COLORS } from "@/common";
import styled from "styled-components";

export const ContainerMenu = styled.div`
  display: none;
  padding:60px 20px;

  @media (max-width: ${BREAKPOINTS.sm}) {
    display: flex;
    flex-direction: column;
    gap: 100px;
    margin-top: 36px;
    position: absolute;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100vh;
    background-color: ${COLORS.light._05};
  }
`;

export const CardButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  #enter {
    background-color: ${COLORS.brand_light._01};
    color: ${COLORS.brand_dark._01};
  }
`;
