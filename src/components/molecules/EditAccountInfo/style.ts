import { colors } from '@/common';
import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
  h3 {
    font-weight: 500;
    font-size: 16px;
    color: ${colors.gray._01};
  }
`;

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
export const ButtonContainer = styled.div`
  padding: 33px 0;
  display: flex;
  justify-content: center;
  button {
    color: ${colors.auxiliary.red_state};
    height: fit-content;
    width: fit-content;
    padding: 0;
    background: none;
    border: none;
  }
`;
