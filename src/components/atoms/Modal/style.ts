import { breakpoints } from '@/common';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const ContainerModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  z-index: 30;
  opacity: 0;
  animation: ${fadeIn} 0.3s ease-in-out forwards;
  @media (max-width: ${breakpoints.md}) {
    width: 100%;
    transform: none;
    top: 10%;
    left: 0;
    height: 90%;
    padding: 0;
    overflow: auto;
  }
`;
export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
  z-index: 20;
  cursor: pointer;
`;
