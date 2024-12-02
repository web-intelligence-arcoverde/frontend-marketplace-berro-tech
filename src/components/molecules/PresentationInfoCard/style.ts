import styled from 'styled-components';
import Image from 'next/image';
import { breakpoints, colors } from '@/common';

export const Container = styled.div`
  display: flex;
  padding: 24px;
  background: ${colors.sub_brand._04};
  border: 1px solid ${colors.opacity.blue_08};
  border-radius: 5px;
  gap: 24px;
  @media (max-width: ${breakpoints.md}) {
    flex-direction: column;
  }
`;
export const Figure = styled.figure`
  background: ${colors.light._05};
  padding: 28px;
  border: 1px solid rgba(27, 93, 224, 0.08);
  border-radius: 5px;
  width: fit-content;
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  h5 {
    font-weight: 600;
    font-size: 16px;
    color: ${colors.sub_brand._01};
  }
  p {
    font-size: 16px;
    color: ${colors.sub_brand._01};
    font-weight: 400;
  }
`;
export const StyledImage = styled(Image)``;
