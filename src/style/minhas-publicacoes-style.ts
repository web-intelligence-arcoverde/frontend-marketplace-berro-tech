import { BREAKPOINTS, COLORS } from "@/common";
import styled from "styled-components";
import { CardButton } from "@/components/atoms/Button/style";

export const ContainerMypublication = styled.div<{ empty: boolean }>`
  display: flex;
  width: 100%;
  align-items: ${(props) => (props.empty ? "center" : "flex-start")};
  justify-content: space-between;
  background-color: ${COLORS.brand_light._04};
  padding: 50px 100px;

  @media (max-width: ${BREAKPOINTS.sm}) {
    width: 100%;
    padding: 0 20px;
    margin-top: 0;
    flex-direction: column;
    margin-bottom: 20px;
    position: relative;
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
  @media (max-width: ${BREAKPOINTS.sm}) {
    margin-bottom: 34px;
    width: 100%;
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
    margin-bottom: 120px;
    margin-top: 10px;
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

export const ButtonFixedMobile = styled(CardButton)`
  display: none;
  @media (max-width: ${BREAKPOINTS.sm}) {
    display: block;
    color: ${COLORS.light._05};
    background-color: ${COLORS.sub_brand._02};
    width: 90%;
    margin: 0 auto;
  }
`;

export const CardFixedMobile = styled.div`
  display: none;
  @media (max-width: ${BREAKPOINTS.sm}) {
    background-color: ${COLORS.brand_light._04};
    display: flex;
    border-top: solid 2px ${COLORS.light._02};
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 5;
    padding: 28px 0;
  }
`;

export const ContainerTabs = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 780px;
`;
// **********************************   Style da página de Id   *************************************

export const Content = styled.div`
  display: flex;
  padding: 44px 100px;
  gap: 32px;
  background-color: ${COLORS.light._05};
  @media (max-width: ${BREAKPOINTS.sm}) {
    padding: 0;
    flex-direction: column;
  }
`;

export const InfoProduct = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  gap: 32px;
`;
