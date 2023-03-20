import styled from "styled-components";
import { BREAKPOINTS, COLORS } from "@/common";
import Image from "next/image";

export const Main = styled.main`
  display: flex;
  align-items: center;
  height: 100vh;
  max-width: ${BREAKPOINTS.xg};
  margin: 0 auto;
  background-color: ${COLORS.light._05};

  @media (max-width: ${BREAKPOINTS.sm}) {
    flex-direction: column;
  }
`;
export const StyleImage = styled(Image)`
  height: 100vh;
  @media (max-width: ${BREAKPOINTS.sm}) {
    display: none;
  }
`;
export const StyleImageMobile = styled.div`
  display: none;
  @media (max-width: ${BREAKPOINTS.sm}) {
    display: block;
    width: 100%;

    img {
      width: 100%;
      object-fit: cover;
    }
  }
`;

export const ContainerChildren = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
