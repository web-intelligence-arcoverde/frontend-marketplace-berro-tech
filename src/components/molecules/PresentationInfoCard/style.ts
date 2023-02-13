import styled from "styled-components";
import Image from "next/image";
import { COLORS } from "@/common";

export const Container = styled.div`
  display: flex;
  padding: 24px;
  background: ${COLORS.sub_brand._04};
  border: 1px solid ${COLORS.opacity.blue_08};
  border-radius: 5px;
  gap: 24px;
`;
export const Figure = styled.figure`
  background: ${COLORS.light._05};
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
    color: ${COLORS.sub_brand._01};
  }
  p {
    font-size: 16px;
    color: ${COLORS.sub_brand._01};
    font-weight: 400;
  }
`;
export const StyledImage = styled(Image)``;
