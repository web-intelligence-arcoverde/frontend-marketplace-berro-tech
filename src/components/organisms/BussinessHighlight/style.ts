import { COLORS } from "@/common";
import styled from "styled-components";

export const Container = styled.section`
  background: ${COLORS.brand_light._04};
  padding: 112px 100px;
  flex-direction: column;
`;
export const ProductCardsContainer = styled.div`
  margin-top: 48px;
  display: flex;
  justify-content: space-between;
  overflow-x: auto;
  flex-wrap: wrap;
  gap: 48px 16px;
  width: 100%;
  @media (max-width: 1416px) {
    justify-content: space-evenly;
  }
  @media (max-width: 991px) {
    flex-wrap: nowrap;
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
`;
