import { COLORS, BREAKPOINTS } from "@/common";
import styled from "styled-components";

export const Container = styled.section`
  background: ${COLORS.brand_light._04};
  padding: 112px 100px;
  flex-direction: column;
  @media (max-width: ${BREAKPOINTS.md}) {
    padding: 112px 0;
  }
  
`;
export const LinkMobileContainer = styled.div`
  display: none;
  @media (max-width: ${BREAKPOINTS.md}) {
    width: 100%;
    display: block;
    padding: 20px;
    a{
      border-radius: 5px;
      padding: 16px;
      display: block;
      width: 100%;
      text-align: center;
      background: ${COLORS.sub_brand._02};
      font-weight: 600;
      font-size: 16px;
      color: ${COLORS.light._05};
    }
  }
  
`;
export const ProductCardsContainer = styled.div`
  margin-top: 48px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 48px 16px;
  @media (max-width: 1416px) {
    justify-content: space-evenly;
  }
  @media (max-width: ${BREAKPOINTS.md}) {
    flex-wrap: nowrap;
    justify-content: flex-start;
    padding: 0 20px;
    overflow-x: scroll;
  }
`;
export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-weight: 600;
    font-size: 32px;
    color: ${COLORS.brand_dark._01};
  }
  a {
    border: 1.5px solid ${COLORS.light._02};
    border-radius: 5px;
    background-color: ${COLORS.light._05};
    padding: 12px 24px;
    font-weight: 400;
    font-size: 16px;
    color: ${COLORS.dark._03};
  }
  @media (max-Width:${BREAKPOINTS.md}) {
    padding: 0 20px;
    a{
      display: none;
    }
  }
`;
