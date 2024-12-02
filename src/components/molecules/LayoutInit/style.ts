import styled from 'styled-components';
import { breakpoints, colors } from '@/common';
import Image from 'next/image';

export const Main = styled.main`
  display: flex;
  align-items: center;
  height: 100vh;
  max-width: ${breakpoints.xg};
  margin: 0 auto;
  background-color: ${colors.light._05};

  @media (max-width: ${breakpoints.sm}) {
    flex-direction: column;
  }
`;
export const StyleImage = styled(Image)`
  height: 100vh;
  @media (max-width: ${breakpoints.sm}) {
    display: none;
  }
`;
export const StyleImageMobile = styled.div`
  display: none;
  @media (max-width: ${breakpoints.sm}) {
    display: block;
    width: 100%;

    img {
      width: 100%;
      object-fit: cover;
    }
  }
`;

export const ContainerChildren = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
