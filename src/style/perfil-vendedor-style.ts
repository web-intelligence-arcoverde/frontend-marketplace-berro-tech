import { BREAKPOINTS, COLORS } from "@/common";
import styled from "styled-components";

export const ContainerSellerProfile = styled.div`
  background: ${COLORS.light._05};
  display: flex;
  gap: 32px;
  padding: 44px 112px;
  @media (max-width:${BREAKPOINTS.md}) {
    flex-direction: column-reverse;
    padding: 0;
  }
`;

export const ContainerSellerProductHeader = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;
`;

export const ContainerBreadcumb = styled.div`
  width: 100%;
  display: flex;
  background: ${COLORS.light._05};
  border-radius: 5px;
  border: 1.5px solid ${COLORS.light._02};
`;

export const CardSellerProfile = styled.div`
  width: fit-content;
  @media (max-width: ${BREAKPOINTS.md}) {
    width: 100%;
    display : flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1.5px solid ${COLORS.light._02};
  }
`;

export const ContainerSellerProduct = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;

  @media (max-width: ${BREAKPOINTS.largeScreen}) {
    width: auto;
  }
`;


export const ContainerSellerProductMain = styled.div`
  width: 100%;
  display: flex;
  margin-top: 16px;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 32px 16px;
  @media (max-width: 1416px) {
    justify-content: space-evenly;
  }
  @media (max-width: ${BREAKPOINTS.md}) {
    justify-content: center;
    padding: 0 20px 20px 20px;
    margin-top: 0;
  }
`;
