import styled from "styled-components";
import { COLORS } from "@/common";

export const Container = styled.div`
  border: solid 1px ${COLORS.gray_color_13};
  border-radius: 5px;
  padding-bottom: 24px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 24px;
`;

export const Texts = styled.div`
  h4 {
    font-weight: 600;
    font-size: 18px;
    color: ${COLORS.gray_color_05};
  }
  h5 {
    margin-top: 12px;
    font-weight: 400;
    font-size: 16px;
    color: ${COLORS.blue_color};
  }
`;

export const Row = styled.div`
  height: 2px;
  width: 100%;
  background-color: ${COLORS.gray_color_13};
  margin-bottom: 18px;
`;

export const CardButton = styled.div`
  padding: 0 24px;
`;

export const CardChildren = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px;
`;
