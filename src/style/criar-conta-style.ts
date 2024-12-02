import styled from 'styled-components';
import { colors } from '@/common';

export const FormRegister = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const CardStep = styled.span`
  font-weight: 400;
  color: ${colors.gray._02};
  padding: 6px 12px;
  border: 1px solid ${colors.light._02};
  border-radius: 5px;
  width: fit-content;
`;
