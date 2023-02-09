import { COLORS } from "@/common";
import styled from "styled-components";

export const Container = styled.section`
  background: ${COLORS.white_color_10};
  padding: 112px;
`;
export const ProductCardsContainer = styled.div`
  margin-top: 48px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
`;
export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-weight: 600;
    font-size: 32px;
    color: ${COLORS.primary_text_color};
  }
  a {
    border: 1.5px solid ${COLORS.gray_color_13};
    border-radius: 5px;
    background-color: ${COLORS.white_color_100};
    padding: 12px 24px;
    font-weight: 400;
    font-size: 16px;
    color: ${COLORS.gray_color_07};
  }
`;
