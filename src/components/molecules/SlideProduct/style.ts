import { ICONS } from "@/assets";
import { COLORS } from "@/common";
import Image from "next/image";
import styled from "styled-components";

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
  z-index: 20;
  cursor: pointer;
`;

export const ContainerModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  z-index: 30;
 
`;
export const CardSlide = styled.div`
  max-width: 700px;
  max-height: 600px;
  .swiper-pagination-bullet {
    background: ${COLORS.light._05};
  }
  .swiper-button-next {
    width: 50px;
    content: url(${ICONS.ArrowSlide.src});
  }
  .swiper-button-prev {
    width: 50px;
    transform: rotate(180deg);
    content: url(${ICONS.ArrowSlide.src});
  }
`;
export const SlideImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 500px;
  border-radius: 5px;
`;
