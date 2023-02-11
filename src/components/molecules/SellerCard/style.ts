import styled from 'styled-components';
import {COLORS} from '@/common/index';
import Image from 'next/image';

export const Container = styled.div`
  border-radius: 5px;
  width: fit-content;
  background: ${COLORS.light._05};
  border: 1.5px solid ${COLORS.light._02};
  border-radius: 5px;
`;

export const ImageSeller = styled(Image)`
  width: 100%;
  border-radius: 5px 5px 0 0;
  object-fit: cover;
`;
