import styled from 'styled-components';
import { colors, breakpoints } from '@/common';

export const CardInputUser = styled.div<{ width?: string }>`
  display: flex;
  align-items: center;
  border: 1.5px solid ${colors.light._02};
  border-radius: 5px;
  padding: 16px;
  color: ${colors.gray._04};
  background-color: ${colors.light._04};
  justify-content: space-between;
  height: 85px;
  position: relative;
  div {
    width: 100%;
  }
  input {
    height: 42px;
    border: none;
    font-size: 16px;
    font-weight: 500;
    width: ${(props) => (props.width ? props.width : '100%')};
    font-size: 16px;
    background-color: ${colors.light._04};
    ::placeholder {
      color: ${colors.gray._04};
    }
  }

  button {
    background: none;
    border: none;
  }
`;
export const TextLabel = styled.label`
  text-transform: capitalize;
`;
export const MessageErro = styled.span`
  color: ${colors.auxiliary.red_state};
  position: absolute;
  bottom: -20px;
  font-size: 14px;
  @media (max-width: ${breakpoints.sm}) {
    font-size: 12px;
    bottom: -16px;
  }
`;
