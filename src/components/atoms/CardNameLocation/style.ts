import styled from 'styled-components';
import { COLORS } from '@/common';

export const Container = styled.div`
  
`;
export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  color: ${COLORS.blue_color};
  font-weight: 400px;
  font-size: 16px;
  img {
    width: 16px;
    border-radius: 0;
    margin-right: 6px;
  }
`;