import styled from "styled-components";
import { COLORS } from "@/common";

export const ContainerHeader = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 12px 122px 12px 130px;
  background-color: ${COLORS.primary_color};
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 12px;
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
    color: ${COLORS.third_text_color};
    
  }
  #brightness {
    color: ${COLORS.primary_text_color};
  }
`;
export const CardAvatar = styled.div`
  cursor: pointer;

  img {
    width: 48px;
    height: 48px;
    border-radius: 5px;
    border: solid 2px ${COLORS.white_color_100};
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
  background-color: ${COLORS.primary_text_color};
  align-self: flex-start;
`;
export const ButtonMenu = styled.button`
  padding: 8px;
  border: none;
  border-radius: 5px;
`;
