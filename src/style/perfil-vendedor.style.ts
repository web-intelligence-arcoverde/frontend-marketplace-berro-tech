import { BREAKPOINTS, COLORS } from "@/common";
import styled from "styled-components";

export const ContainerPerfilVendedor = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 50px;
  background-color: ${COLORS.brand_light._04};

  @media (max-width: ${BREAKPOINTS.sm}) {
    margin-top: 0;
    flex-direction: column;
  }
`;
