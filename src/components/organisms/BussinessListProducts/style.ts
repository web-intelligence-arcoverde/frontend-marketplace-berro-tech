import { BREAKPOINTS } from '@/common';
import styled from "styled-components"

export const ProductCardContainer = styled.div`
  margin-top: 16px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 32px 16px;

  @media (max-width: ${BREAKPOINTS.md}) {
    justify-content: center;
    margin-top: 28px;
  }
`;