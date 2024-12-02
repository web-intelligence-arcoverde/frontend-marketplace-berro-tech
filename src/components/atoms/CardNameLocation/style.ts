import styled from 'styled-components';
import { colors } from '@/common';

export const Location = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  color: ${colors.sub_brand._02};
  font-weight: 400px;
  font-size: 16px;
  img {
    max-width: 16px;
    margin-right: 6px;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 24px 0;
  align-items: center;
  border-left: solid 1px ${colors.light._02};
  border-right: solid 1px ${colors.light._02};
  p {
    color: ${colors.gray._02};
    font-size: 16px;
    margin-top: 24px;
  }
  h6 {
    color: ${colors.gray._03};
    font-weight: 400;
    font-size: 14px;
    margin-top: 24px;
  }
  h4 {
    color: ${colors.gray._01};
    font-size: 18px;
    font-weight: 600;
    margin: 12px 0;
  }
  p,
  h6,
  h5,
  h4 {
    ::first-letter {
      text-transform: uppercase;
    }
  }
`;
