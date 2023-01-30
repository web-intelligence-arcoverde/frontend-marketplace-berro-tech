import styled from "styled-components";
import { COLORS, BREAKPOINTS } from "@/common";
import { IMAGES } from "@/assets";
import Image from "next/image";

export const Intro = styled.section`
  display: flex;
  align-items: center;
  background-color: ${COLORS.background_color};
`;

export const StyledImage = styled(Image)`
  width: 100%;
  @media (min-width: ${BREAKPOINTS.smspecific}) and (max-width: ${BREAKPOINTS.xg}) {
    width: 48%;
  }
`;

export const DescriptionPresentation = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 100px;
  background-image: url(${IMAGES.BackgroundPresentation?.src});
  width: 100%;

  h1,
  p {
    width: 500px;
  }
  h6 {
    width: fit-content;
    padding: 12px 20px;
    color: ${COLORS.secondary_text_color};
    font-size: 16px;
    font-weight: 600;
    background-color: ${COLORS.third_color};
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
  #background {
    position: absolute;
  }
`;
