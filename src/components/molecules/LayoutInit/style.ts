import styled from "styled-components";
import { BREAKPOINTS } from "@/common";

export const Main = styled.main`
  display: flex;
  align-items: center;
  height: 100vh;
  max-width: ${BREAKPOINTS.xg};
  margin: 0 auto;
`;

export const ContainerChildren = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
