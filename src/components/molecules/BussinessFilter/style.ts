import styled from "styled-components";
import { BREAKPOINTS, COLORS } from '@/common';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputSearchBar = styled.input`
  width: 100%;
  border: none;
`;

export const InputContainer = styled.form`
  display: flex;
  gap: 20px;
  background: ${COLORS.light._05};
  padding: 10px;
  width: 100%;
  border-left: solid 2px ${COLORS.brand_light._02};
  @media (max-width: ${BREAKPOINTS.md}) {
  }
`;
export const CheckboxContainer = styled.form`
 padding: 32px 16;
 max-height: 300px;
 overflow-y: auto;
`;
