import styled from "styled-components";
import { BREAKPOINTS, COLORS } from "@/common";
import Image from "next/image";

export const CardAvatar = styled.div`
  cursor: pointer;
  position: relative;
`;
export const CardDropDown = styled.div`
  position: absolute;
  right: 0px;
  top: 46px;
  z-index: 20;
`;
export const StyleAvatar = styled(Image)<{isEmpty:boolean}>`
  width: 46px;
  height: 46px;
  border-radius: 5px;
  border: solid 2px ${(props)=>props.isEmpty? `${COLORS.light._05}`:  'none'};
  margin-top: 4px;
  object-fit:cover;
`;
export const CardArrowUp = styled.div`
  background-color: ${COLORS.light._05};
  width: 46px;
  height: 46px;
  border-radius: 5px 5px 0 0;
  border: solid 2px ${COLORS.light._05};
  display: flex;
  align-items: center;
  justify-content: center;
` 

export const CardButton = styled.div`
  #to-enter {
    width: 120px;
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    display: none;
  }
`;
export const CardMenuMobile = styled.div`
  display: none;
  @media (max-width: ${BREAKPOINTS.sm}) {
    display: block;
    display: flex;
    align-items: center;
    gap: 16px;
  }
`;

export const ButtonMenu = styled.button`
  padding: 8px 10px;
  border: none;
  border-radius: 5px;
  background-color: ${COLORS.brand_dark._03};
`;

export const CardIcons = styled.div`
  padding: 6px;
  background-color: ${COLORS.light._05};
  width: 44px;
  display: flex;
  height: 40px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
