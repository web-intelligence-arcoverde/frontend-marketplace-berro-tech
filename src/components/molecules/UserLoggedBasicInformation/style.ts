import { breakpoints, colors } from '@/common';
import { CardButton } from '@/components/atoms/Button/style';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  #first-add {
    @media (max-width: ${breakpoints.sm}) {
      display: none;
    }
  }
  @media (max-width: ${breakpoints.sm}) {
    margin-bottom: 34px;
    padding: 0 20px;
    width: 100%;
  }
`;

export const Button = styled(CardButton)`
  background-color: ${colors.sub_brand._02};
  color: ${colors.light._05};
  width: 100%;

  @media (max-width: ${breakpoints.lg}) {
    display: none;
  }
`;
