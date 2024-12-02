import { breakpoints, colors } from '@/common';
import styled from 'styled-components';

export const Container = styled.form`
  width: 100%;
`;
export const ContainerTitle = styled.div`
  width: 100%;
  padding: 24px;
  background: ${colors.light._04};
  border-bottom: 1.5px solid ${colors.light._02};
  display: flex;
  flex-direction: column;
  gap: 24px;
  h2 {
    font-weight: 500;
    font-size: 16px;
    color: ${colors.gray._01};
  }
`;
export const ContainerInputs = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;
  @media (max-width: ${breakpoints.md}) {
    flex-direction: column;
  }
`;

export const NextButtonContainer = styled.div`
  width: 100%;
  padding: 24px;
  display: flex;
  justify-content: flex-end;
`;
export const NextButton = styled.button`
  width: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 54px;
  border: none;
  background: ${colors.sub_brand._02};
  border-radius: 5px;
  font-weight: 600;
  font-size: 16px;
  color: ${colors.light._05};
`;
