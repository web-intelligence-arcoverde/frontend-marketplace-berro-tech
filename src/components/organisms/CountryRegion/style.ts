import { BREAKPOINTS, COLORS } from "@/common";
import styled from "styled-components";

export const Container = styled.section`
  background: ${COLORS.brand_light._04};
  padding: 112px 0 112px 100px;
  display: flex;
  @media (max-width: ${BREAKPOINTS.md}) {
    flex-direction: column;
    padding: 112px 0;
  }
`;
export const CardInfo = styled.div`
  background: ${COLORS.light._05};
  min-width: 416px;
  h2 {
    font-weight: 500;
    font-size: 24px;
    line-height: 200%;
    letter-spacing: 0.02em;
    color: ${COLORS.brand_dark._01};
    margin-bottom: 41px;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.02em;
    color: ${COLORS.gray._01};
    margin-bottom: 41px;
  }
  padding: 32px;
  @media (max-width: ${BREAKPOINTS.md}) {
    width: 100%;
    min-width: unset;
    span {
      p {
        margin-bottom: 0;
        margin-right: 37px;
      }
      overflow-x: auto;
      display: flex;
    }
  }
`;
export const CardRegion = styled.div<{
  iconColor: string;
  backgroundColor: string;
}>`
  border: 1.5px solid ${COLORS.light._02};
  background: ${COLORS.light._04};
  min-width: 416px;
  figure {
    .map-location-color {
      stroke: ${(props) => props.iconColor} !important;
    }
    border-radius: 5px;
    width: fit-content;
    background: ${(props) => props.backgroundColor};
    padding: 32px;
    margin-bottom: 221px;
  }
  img {
  }
  h5 {
    font-weight: 600;
    font-size: 18px;
    color: ${COLORS.dark._04};
    margin-bottom: 12px;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 200%;
    letter-spacing: 0.02em;
    color: ${COLORS.dark._04};
  }
  padding: 32px;
  @media (max-width: ${BREAKPOINTS.md}) {
    figure {
      margin-bottom: 56px;
    }
  }
`;

export const RegionContainer = styled.div`
  display: flex;
  overflow: overlay;
`;
