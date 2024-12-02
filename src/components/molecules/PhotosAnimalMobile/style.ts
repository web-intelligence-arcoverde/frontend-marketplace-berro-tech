import { breakpoints, colors } from '@/common';
import Image from 'next/image';
import styled from 'styled-components';

export const ContainerModalMobile = styled.div`
  display: none;

  @media (max-width: ${breakpoints.sm}) {
    display: block;
    height: 300px;
    .swiper-pagination-bullet {
      background: ${colors.light._05};
    }
  }
`;
export const SlideImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 300px;
`;

export const Video = styled.video`
  object-fit: cover;
  width: 100%;
  height: 300px;
`;
