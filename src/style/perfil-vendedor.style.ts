import { BREAKPOINTS, COLORS } from "@/common";
import styled from "styled-components";

export const ContainerPerfilVendedor = styled.div<{ empty: boolean }>`
  display: flex;

  align-items: ${(props) => (props.empty ? "flex-start" : "center")};
  justify-content: space-around;
  margin-top: 50px;
  background-color: ${COLORS.brand_light._04};

  @media (max-width: ${BREAKPOINTS.sm}) {
    margin-top: 0;
    flex-direction: column;
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
`;

export const CardProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: flex-end;
  width: 60%;
  margin-bottom: 50px;

  @media (max-width: ${BREAKPOINTS.sm}) {
    width: 100% !important;
    justify-content: center;
    gap: 30px;
    padding: 28px 20px;
    margin-bottom: 0;
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
