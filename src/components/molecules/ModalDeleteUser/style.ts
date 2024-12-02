import { breakpoints, colors } from '@/common';
import styled from 'styled-components';

export const CardRemove = styled.div`
  width: 500px;
  border-radius: 5px;
  border-top: solid 3px ${colors.auxiliary.red_state};
  padding: 28px 24px 24px 24px;
  background: ${colors.light._05};

  h1 {
    font-weight: 450;
    font-size: 18px;
    color: ${colors.gray._01};
  }
  h6 {
    margin-top: 8px;
    margin-bottom: 30px;
    font-weight: 400;
    font-size: 16px;
    color: ${colors.gray._04};
  }

  @media (max-width: ${breakpoints.sm}) {
    width: 100%;
  }
`;

export const CardButtons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  border-top: solid 2px ${colors.light._02};
  padding: 24px 0;

  button {
    :first-child {
      color: ${colors.gray._02};
      background: ${colors.light._02};
    }
    :last-child {
      color: ${colors.light._05};
      background: ${colors.sub_brand._02};
    }
  }
  @media (max-width: ${breakpoints.sm}) {
    flex-direction: column-reverse;
  }
`;
