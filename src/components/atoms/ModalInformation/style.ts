import { breakpoints, colors } from '@/common';
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
  background-color: ${colors.opacity.black_07};
  z-index: 20;
  cursor: pointer;
`;
export const ButtonClose = styled.button`
  position: absolute;
  top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: none;
  gap: 12px;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  background-color: ${colors.light._04};
  right: 10px;
  z-index: 21;
  cursor: pointer;
`;
