import styled from "styled-components";
import { BREAKPOINTS } from "@/common";
import Image from "next/image";

export const Main = styled.main`
  display: flex;
  align-items: center;
  height: 100vh;
  max-width: ${BREAKPOINTS.xg};
  margin: 0 auto;
`;
export const StyleImage = styled(Image)`

@media (max-width:${BREAKPOINTS.sm}){
  display: none;
}
`

export const ContainerChildren = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
