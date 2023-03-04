import styled from "styled-components";
import { BREAKPOINTS, COLORS } from "@/common";
import { CardButton } from "@/components/atoms/Button/style";


export const Main = styled.main`
  width: 100%;
  max-width: ${BREAKPOINTS.xxg};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;
export const ButtonAddProduct = styled(CardButton)`
  background-color: ${COLORS.sub_brand._02};
  color: ${COLORS.light._05};
  width: 100%;
`;
