import { COLORS } from "@/common";
import Image from "next/image";
import styled from "styled-components";

interface Props {
  changeSide?: boolean;
  direction?: boolean;
}

export const Container = styled.section<Props>`
  display: flex;
  justify-content: space-between;
  padding: 100px;
  flex-direction: ${({ changeSide }) => (changeSide ? "row" : "row-reverse")};
 
  p {
    color: ${COLORS.dark._04};
    line-height: 45px;
  }
`;
export const CardTitle = styled.div<Props>`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction ? "column" : "column-reverse"};
`;

export const Arrow = styled(Image)<Props>`
  margin: 20px 0;
  transform: rotate(${({ changeSide }) => (changeSide ? "0deg" : "180deg")});
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  color: ${COLORS.sub_brand._02};
  font-weight: 500;
`;
export const CardChildren = styled.div`
  width: 60%;
  color: ${COLORS.dark._04};
  line-height: 45px;
`;
export const CardSteps = styled.div`
  display: flex;
  margin-top: 120px;
`;
