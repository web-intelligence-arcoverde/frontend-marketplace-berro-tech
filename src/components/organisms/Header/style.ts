import styled from 'styled-components';
import {BREAKPOINTS, COLORS} from '@/common';

export const Container = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 12px 122px 12px 130px;
  background-color: ${COLORS.brand_light._01};
  @media (max-width:${BREAKPOINTS.sm}){
    padding:40px 16px 20px 20px
  }
`;

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
export const CardNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 60px;
`;

export const Nav = styled.ul`
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
export const CardAvatar = styled.div`
  cursor: pointer;

  img {
    width: 46px;
    height: 46px;
    border-radius: 5px;
    border: solid 2px ${COLORS.light._05};
    margin-top: 4px;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

export const Row = styled.li`
  width: 16px;
  height: 2px;
  background-color: ${COLORS.brand_dark._01};
  align-self: flex-start;
`;
export const ButtonMenu = styled.button`
  padding: 8px;
  border: none;
  border-radius: 5px;
`;
