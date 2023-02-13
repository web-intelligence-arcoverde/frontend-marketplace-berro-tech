import styled from "styled-components";
import { BREAKPOINTS, COLORS } from "@/common";

export const ContainerNavigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 48px;
`;

export const ItemNavigation = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  li {
    font-size: 16px;
    font-weight: 600;
    color: ${COLORS.gray._01};
  }
  #brightness {
    color: ${COLORS.brand_dark._01};
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    margin-bottom: 30px;
    :last-child{
      display: none;
    }
    li {
      font-size: 14px;
      font-weight: 400;
    }
    
  }
`;

export const Row = styled.li`
  width: 16px;
  height: 2px;
  background-color: ${COLORS.brand_dark._01};
  align-self: flex-start;
`;
