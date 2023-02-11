import styled from 'styled-components';
import {COLORS} from '@/common';

export const ContainerNavigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 60px;
`;

export const ItemNavigation = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  li {
    font-size: 16px;
    font-weight: 600;
    color: ${COLORS.brand_dark._02};
  }
  #brightness {
    color: ${COLORS.brand_dark._01};
  }
`;

export const Row = styled.li`
  width: 16px;
  height: 2px;
  background-color: ${COLORS.brand_dark._01};
  align-self: flex-start;
`;
