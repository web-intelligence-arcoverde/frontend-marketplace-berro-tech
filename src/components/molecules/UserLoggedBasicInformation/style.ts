import {BREAKPOINTS, COLORS} from '@/common';
import {CardButton} from '@/components/atoms/Button/style';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  #first-add {
    @media (max-width: ${BREAKPOINTS.sm}) {
      display: none;
    }
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    margin-bottom: 34px;
    width: 100%;
  }
`;

export const Button = styled(CardButton)`
  background-color: ${COLORS.sub_brand._02};
  color: ${COLORS.light._05};
  width: 100%;

  @media (max-width: ${BREAKPOINTS.lg}) {
    display: none;
  }
`;
