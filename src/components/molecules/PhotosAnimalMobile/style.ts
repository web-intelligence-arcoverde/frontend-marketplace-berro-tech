import { BREAKPOINTS, COLORS } from "@/common";
import Image from "next/image";
import styled from "styled-components";

export const ContainerModalMobile = styled.div`
  display: none;

  @media (max-width: ${BREAKPOINTS.sm}) {
    display: block;
    height: 300px;
    .swiper-pagination-bullet {
      background: ${COLORS.light._05};
    }
  }
`;
export const SlideImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 300px;
`;
