import { COLORS } from "@/common";
import styled from "styled-components";

export const ContainerSearchMobile = styled.div`
  position: absolute;
  left: 0;
  top: 116px;
  background-color: ${COLORS.light._05};
  width: 100%;
  height: 100vh;
  z-index: 10;
`;

export const CardSearch = styled.div`
  background-color: ${COLORS.light._02};
  padding: 20px 20px 20px 0;
  width: 100%;
`;
export const LastSearchs = styled.ul`
  background: ${COLORS.light._05};
  padding: 32px 20px;
  h6 {
    color: ${COLORS.gray._04};
    font-weight: 500;
    font-size: 0.875rem;
    margin-bottom: 16px;
  }

  li {
    font-size: 1rem;
    color: ${COLORS.gray._02};
    font-weight: 400;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 1px ${COLORS.light._02};
    
    height:64px;
    span{
      width: 40px;
      height: 40px;
      z-index: 11;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }

    :last-child{
      border-bottom: none;
    }
  }
`;
