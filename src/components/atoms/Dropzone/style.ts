import { BREAKPOINTS, COLORS } from '@/common';
import styled from 'styled-components';

export const DropzoneContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 5px;
  border: 2.5px ${COLORS.light._02} dashed;
  background-color: ${COLORS.light._04};
  transition: border .24s ease-in-out;
  @media (max-width: ${BREAKPOINTS.md}) {
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
  p{
    margin-top: 24px;
    margin-bottom: 4px;
    white-space: nowrap;
    font-size: 16px;
    color: ${COLORS.gray._01};
  }
  span{
    font-weight: 400;
    font-size: 14px;
    color: ${COLORS.gray._02};
  }
`;