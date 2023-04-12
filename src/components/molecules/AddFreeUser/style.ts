import styled from "styled-components";
import { BREAKPOINTS, COLORS } from "@/common";
import Image from "next/image";

export const ContainerAddFreeUser = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  width: 100%;
  h5 {
    font-size: 18px;
    font-weight: 500;
    color: ${COLORS.gray._01};
  }
  h6 {
    font-size: 16px;
    font-weight: 400;
    color: ${COLORS.gray._04};
    margin-top: 6px;
    @media (max-width: ${BREAKPOINTS.sm}) {
      padding: 0 52px 28px 52px;
    }
  }
  button {
    background-color: ${COLORS.sub_brand._02};
    color: ${COLORS.light._05};
    max-width: 320px;
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    margin-top: 36px;
    padding-bottom: 100px;
    margin-right: 0;
  }
`;

export const StyleLogo = styled(Image)`
  width: 150px;
  @media (max-width: ${BREAKPOINTS.sm}) {
    width: 110px;
  }
`;

