import { colors } from '@/common';
import styled from 'styled-components';

export const ModalWrapper = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: ${colors.opacity.black_04};
`;

export const ModalContent = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  border-radius: 15px 15px 0 0;
  position: fixed;
  bottom: 0;
  z-index: 2;
  background-color: ${colors.light._04};
  height: 70%;
  width: 100%;
  animation: slide-in-right 0.5s forwards;
  overflow-y: scroll;

  @keyframes slide-in-right {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }
`;
