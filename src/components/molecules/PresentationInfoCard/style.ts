import styled from "styled-components";
import Image from "next/image";
import { COLORS } from "@/common";

export const Container = styled.div`
  display: flex;
  padding: 24px;
  background: ${COLORS.blue_light_1};
  border: 1px solid rgba(27, 93, 224, 0.08);
  border-radius: 5px;
  gap: 24px;
`;
export const Figure = styled.figure`
  background: ${COLORS.white_color_100};
  padding: 28px;
  border: 1px solid rgba(27, 93, 224, 0.08);
  border-radius: 5px;
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h5 {
    font-weight: 600;
    font-size: 16px;
    color: ${COLORS.blue_dark};
  }
  p {
    font-size: 16px;
    color: ${COLORS.blue_dark};
    font-weight: 400;
  }
`;
export const StyledImage = styled(Image)``;
