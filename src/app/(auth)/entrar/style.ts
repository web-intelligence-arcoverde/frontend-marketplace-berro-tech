import styled from 'styled-components';
import { breakpoints, colors } from '@/common';

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

export const Container = styled.div`
  border: solid 1.5px ${colors.light._02};
  border-radius: 5px;
  padding-bottom: 24px;
  width: 500px;

  @media (max-width: ${breakpoints.sm}) {
    width: 100%;
  }
`;

export const CardButton = styled.div`
  padding: 24px 24px 0 24px;
`;

export const ContainerChildren = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
