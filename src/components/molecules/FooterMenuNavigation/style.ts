import styled from 'styled-components';
import { breakpoints, colors } from '@/common';

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

  a {
    font-size: 16px;
    font-weight: 600;
    color: ${colors.gray._01};
  }
  #active {
    color: ${colors.brand_dark._01};
  }
  @media (max-width: ${breakpoints.sm}) {
    margin-bottom: 30px;
    :last-child {
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
  background-color: ${colors.brand_dark._01};
  align-self: flex-start;
`;
