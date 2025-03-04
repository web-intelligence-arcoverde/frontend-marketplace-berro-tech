import styled from 'styled-components';
import { breakpoints, colors } from '@/common';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputSearchBar = styled.input`
  width: 100%;
  border: none;
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 20px;
  background: ${colors.light._05};
  margin-bottom: 32px;
  padding: 10px;
  width: 100%;
  border-top: solid 2px ${colors.light._02};
  border-bottom: solid 2px ${colors.light._02};
  @media (max-width: ${breakpoints.md}) {
  }
`;
export const CheckboxContainer = styled.form`
  padding: 32px 16;
  max-height: 300px;
  overflow-y: auto;
`;
