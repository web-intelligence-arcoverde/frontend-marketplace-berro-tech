import { StyledImage } from "./../../components/molecules/PresentationInfoCard/style";
import styled from "styled-components";
import { BREAKPOINTS, COLORS } from "@/common";
import Image from "next/image";

export const Presentation = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ListSections = styled.ul`
  display: flex;
  flex-direction: column;
`;
export const PrintImage = styled(Image)`
  width: 100%;
  border: 1px solid ${COLORS.light._02};
  border-top: 4px solid ${COLORS.brand_light._01};
  border-radius: 5px;
  object-fit: cover;
  @media (max-width: ${BREAKPOINTS.sm}) {
    display: none;
  }
`;
export const PrintImageMobile = styled(Image)`
  display: none;
  @media (max-width: ${BREAKPOINTS.sm}) {
    width: 100%;
    display: block;
  }
`;

export const StyleImage = styled(Image)`
  width: 100%;
  @media (max-width: ${BREAKPOINTS.sm}) {
    display: none;
  }
`;
export const StyledImageMobile = styled(Image)`
  display: none;
  @media (max-width: ${BREAKPOINTS.sm}) {
    display: block;
    margin-top: 50px;
  }
`;

export const ContainerPresentation = styled.div`
  display: flex;
  width: 100%;
  padding: 100px;
  align-items: end;
  justify-content: space-between;
  color: ${COLORS.dark._03};

  h1 {
    width: 80%;
    line-height: 80px;
    font-size: 2.5rem;
    font-weight: 700;
  }
  h6 {
    line-height: 60px;
    font-size: 16px;
    font-weight: 400;
    display: flex;
    align-items: center;
  }
  img {
    margin-left: 10px;
  }

  @media (max-width: ${BREAKPOINTS.sm}) {
    padding: 0;
    flex-direction: column;

    h1 {
      width: 100%;
      justify-content: center;
      font-size: 28px;
      line-height: 42px;
      padding: 60px 20px 40px 20px;
      margin: 0 auto;
    }
  }
`;
