import Image from 'next/image';
import styled from 'styled-components';
import { BREAKPOINTS, COLORS } from '@/common';

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${COLORS.light._05};
  padding: 0 100px 128px 100px;
  @media (max-Width:${BREAKPOINTS.md}) {
    padding: 0 20px 128px 20px;
  }
`;
export const CardsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 16px;
  @media (max-Width:${BREAKPOINTS.md}) {
    flex-direction: column;
  }
`;

export const ImageArrowDown = styled(Image)`
  margin: 50px auto;
  animation: bounce 2s infinite;
  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }
`;
