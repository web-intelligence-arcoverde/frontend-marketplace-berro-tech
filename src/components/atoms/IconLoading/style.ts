import styled, { keyframes } from "styled-components";

export const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const DotAnimation = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  50% {
    opacity: 0.3;
    transform: translateY(-8px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Svg = styled.svg`
  .dot-one {
    animation: ${DotAnimation} 1s ease-in-out infinite;
    animation-delay: 0ms;
  }
  .dot-two {
    animation: ${DotAnimation} 1s ease-in-out infinite;
    animation-delay: 200ms;
  }
  .dot-tree {
    animation: ${DotAnimation} 1s ease-in-out infinite;
    animation-delay: 400ms;
  }
`;
