import { BREAKPOINTS, COLORS } from "@/common";
import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% {
    stroke-width: 5;
  }
  50% {
    stroke-width: 10;
  }
  100% {
    stroke-width: 5;
  }
`;

export const ContainerModalMessage = styled.div<{ error: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 600px;
  max-height: 350px;
  border-radius: 5px 5px 0 0;
  justify-content: center;
  align-items: center;
  border-top: solid 3px ${COLORS.brand_light._01};
  border-color: ${(props) =>
    props.error
      ? `${COLORS.auxiliary.red_state}`
      : `${COLORS.brand_light._01}`};
  background-color: ${COLORS.light._05};
  padding: 80px 70px;
  position: relative;
  text-align: center;

  img,
  svg {
    margin-bottom: 28px;
  }
  h1 {
    font-weight: 500;
    font-size: 18px;
    color: ${COLORS.gray._01};
  }
  h6 {
    font-weight: 400;
    font-size: 16px;
    color: ${COLORS.gray._04};
  }

  @media (max-width: ${BREAKPOINTS.sm}) {
    padding: 80px 60px;
    width:100%
  }
`;

export const ButtonClose = styled.button`
  img {
    margin: 0;
    width: 17px;
  }
  width: 44px;
  height: 44px;
  padding: 10px;
  border-radius: 5px;
  border: solid 1.5px ${COLORS.light._02};
  position: absolute;
  right: 15px;
  top: 15px;
`;
