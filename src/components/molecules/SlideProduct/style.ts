import { ICONS } from '@/assets';
import { colors } from '@/common';
import Image from 'next/image';
import styled from 'styled-components';

export const CardSlide = styled.div`
  max-width: 700px;
  max-height: 600px;
  .swiper-pagination-bullet {
    background: ${colors.light._05};
  }
  .swiper-button-next {
    width: 50px;
    content: url(${ICONS.ArrowSlide.src});
  }
  .swiper-button-prev {
    width: 50px;
    transform: rotate(180deg);
    content: url(${ICONS.ArrowSlide.src});
  }
`;
export const SlideImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 500px;
  border-radius: 5px;
`;

export const Video = styled.video`
  object-fit: cover;
  width: 100%;
  height: 500px;
  border-radius: 5px;
`;
