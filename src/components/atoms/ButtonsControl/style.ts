import { breakpoints, colors } from '@/common';
import styled from 'styled-components';

export const CardButtons = styled.div`
  display: flex;
  gap: 20px;
  border: 1.5px solid ${colors.light._02};
  padding: 0 24px;
  background-color: ${colors.light._05};

  @media (max-width: ${breakpoints.lg}) {
    padding: 10px 24px;
    border: none;
    max-width: 700px;
    margin: 0 auto;
  }

  Button {
    font-weight: 500;
    margin: 20px 0;

    :first-child {
      background-color: ${colors.light._02};
      color: ${colors.gray._02};
    }
    :last-child {
      background-color: rgba(211, 60, 37, 0.1);
      color: ${colors.auxiliary.red_negative};
    }
  }
`;
