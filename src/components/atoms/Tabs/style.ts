import { BREAKPOINTS } from "@/common";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  .tab {
    min-width: 120px;
    text-align: center;
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    min-width: 0;
  }
`;
