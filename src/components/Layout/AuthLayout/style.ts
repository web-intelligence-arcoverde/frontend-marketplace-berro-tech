import styled from 'styled-components';

import Image from 'next/image';
import { breakpoints, colors } from '@/common';

export const Container = styled.main`
  display: flex;
  align-items: center;
  height: 100vh;
  height: 100%;
  margin: 0 auto;
  background-color: ${colors.light._05};

  @media (max-width: ${breakpoints.sm}) {
    flex-direction: column;
  }
`;

export const Logo = styled(Image)`
  height: 100vh;
  object-fit: cover;

  @media (max-width: ${breakpoints.sm}) {
    display: block;
    width: 100%;
    height: 140px;

    img {
      width: 100%;
      object-fit: cover;
    }
  }
`;
