import { BREAKPOINTS, COLORS } from "@/common";
import styled from "styled-components";

export const ContainerMenu = styled.div`
  display: none;
  padding: 60px 20px;

  @media (max-width: ${BREAKPOINTS.sm}) {
    display: flex;
    flex-direction: column;
    gap: 100px;
    position: absolute;
    left: 0;
    top: 116px;
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

export const CardNavigation = styled.div`

  display: flex;
  flex-direction: column;
  text-align: start;
  a {
    padding-left: 56px;
    color: ${COLORS.gray._01};
    font-size: 1.125rem;
    line-height: 60px;
    border-left:2px solid ${COLORS.light._02};
   
  }
  #active{
      font-weight: 500;
      color:${COLORS.sub_brand._02};
      border-left:solid 2px${COLORS.sub_brand._02};;
    }
`;
