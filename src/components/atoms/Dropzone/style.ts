import { breakpoints, colors } from '@/common';
import styled from 'styled-components';

export const DropzoneContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 5px;
  border: 2.5px ${colors.light._02} dashed;
  background-color: ${colors.light._04};
  transition: border 0.24s ease-in-out;
  @media (max-width: ${breakpoints.md}) {
    flex: auto;
  }
`;
export const InfoContainer = styled.div`
  display: flex;
  width: min-content;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center;
  p {
    margin-top: 24px;
    margin-bottom: 4px;
    white-space: nowrap;
    font-size: 16px;
    color: ${colors.gray._01};
  }
  span {
    font-weight: 400;
    font-size: 14px;
    color: ${colors.gray._02};
  }
`;
