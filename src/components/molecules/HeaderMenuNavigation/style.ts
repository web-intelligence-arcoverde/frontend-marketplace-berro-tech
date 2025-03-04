import styled from 'styled-components';
import { breakpoints, colors } from '@/common';

export const ContainerNavigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 60px;
  @media (max-width: ${breakpoints.sm}) {
    display: none;
  }
`;

export const ItemNavigation = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  li {
    font-size: 16px;
    font-weight: 600;
    color: ${colors.brand_dark._02};
  }
  #brightness {
    color: ${colors.brand_dark._01};
  }
`;

export const Row = styled.li`
  width: 16px;
  height: 2px;
  background-color: ${colors.brand_dark._01};
  align-self: flex-start;
`;
