import styled from 'styled-components';
import { COLORS } from '@/common';

export const ContainerHeader = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 12px 122px 12px 130px;
  background-color:${COLORS.primary_color} ;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Nav = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  li {
    img {
      width: 42px;
    }
  }
`;
export const CardAvatar = styled.div`
  cursor: pointer;
  img {
    width: 48px;
    height: 48px; 
    border-radius: 10px;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;
