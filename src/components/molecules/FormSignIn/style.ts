import { colors } from '@/common';
import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
`;

export const LostPassword = styled.a`
  color: ${colors.sub_brand._02};
  font-size: 14px;
  text-align: end;
  position: relative;
  bottom: 10px;
`;
