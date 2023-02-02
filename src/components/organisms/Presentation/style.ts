import styled from "styled-components";
import { COLORS } from "@/common";
import { IMAGES } from "@/assets";

export const Intro = styled.section`
  display: flex;
  align-items: center;
  height: 600px;
  background: linear-gradient(
      95deg,
      #f8f3df 17.31%,
      rgba(248, 243, 223, 0) 95.98%
    ),
    linear-gradient(80.03deg, #f8f3df 12.55%, rgba(248, 243, 223, 0) 37.36%),
    url(${IMAGES.BackgroundPresentation?.src});

  background-size: contain;
  background-position: right ;
`;

export const DescriptionPresentation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 100px;
  width: 30%;
  z-index: 5;

  h1,
  p {
    width: 440px;
  }
  h6 {
    width: fit-content;
    padding: 12px 20px;
    color: ${COLORS.blue_color};
    font-size: 16px;
    font-weight: 600;
    background-color: ${COLORS.blue_background_opacity};
    border-radius: 5px;
  }
  h1 {
    color: ${COLORS.primary_text_color};
    font-weight: 800;
    font-size: 40px;
    line-height: 60px;
  }
  p {
    color: ${COLORS.third_text_color};
    font-weight: 800px;
    font-size: 18px;
    line-height: 36px;
  }
`;
