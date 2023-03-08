import { BREAKPOINTS, COLORS } from "@/common";
import styled from "styled-components";

export const ContainerMypublication = styled.div`
  display: flex;
  width: 90%;
  align-items: flex-start;
  justify-content: center;
  margin: 50px auto;
  background-color: ${COLORS.brand_light._04};

  @media (max-width: ${BREAKPOINTS.sm}) {
    width: 100%;
    padding: 0 20px;
    margin-top: 0;
    flex-direction: column;
    margin-bottom: 20px;
  }
`;
export const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  #first-add {
    @media (max-width: ${BREAKPOINTS.sm}) {
      display: none;
    }
  }
  @media (max-width: ${BREAKPOINTS.sm}){
    margin-bottom:34px ;
  }
`;

export const CardProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: flex-start;
  width: 100%;

  @media (max-width: ${BREAKPOINTS.sm}) {
    width: 100% !important;
    justify-content: center;
    gap: 30px;
  }
`;

export const CardButtonMobile = styled.div`
  display: none;
  @media (max-width: ${BREAKPOINTS.sm}) {
    display: block;
    width: 100%;
    border-top: solid 2px ${COLORS.light._02};
    padding-top: 28px;
  }
`;

export const SectionProducts = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-left: 32px;
  @media (max-width: ${BREAKPOINTS.sm}) {
    padding-left: 0;
  }
`;
