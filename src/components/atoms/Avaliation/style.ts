import { COLORS } from '@/common';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  h5 {
    color: ${COLORS.gray._04};
    font-weight: 500;
    font-size: 16px;
  }
`;
