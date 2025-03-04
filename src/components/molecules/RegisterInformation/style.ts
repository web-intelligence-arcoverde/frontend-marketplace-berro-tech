import { breakpoints, colors } from '@/common';
import styled from 'styled-components';

export const TitleStep = styled.h2`
  font-size: 16px;
  color: ${colors.gray._01};
  font-weight: 500;
  margin-bottom: 24px;
`;

export const ContainerForm = styled.form`
  display: flex;
  height: 100%;
  @media (max-width: ${breakpoints.md}) {
    flex-direction: column;
  }
`;

export const FirstColumn = styled.div`
  width: 60%;
  height: 100%;
  padding: 24px 24px 0 24px;
  background-color: ${colors.light._05};
  overflow-y: auto;
  @media (max-width: ${breakpoints.md}) {
    width: 100%;
    height: fit-content;
    overflow-y: visible;
  }
`;

export const SecondColumn = styled.div`
  width: 40%;
  border-left: 1.5px solid ${colors.light._02};
  background-color: ${colors.light._04};
  overflow-y: auto;
  @media (max-width: ${breakpoints.md}) {
    width: 100%;
    height: fit-content;
    overflow-y: visible;
  }
`;

export const AboutBussines = styled.div`
  width: 100%;
  border-bottom: 1.5px solid ${colors.light._02};
  padding: 24px;
`;

export const NextButtonContainer = styled.div`
  width: 100%;
  padding: 24px;
`;

export const NextButton = styled.button`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  border: none;
  background: ${colors.sub_brand._02};
  border-radius: 5px;
  font-weight: 600;
  font-size: 16px;
  color: ${colors.light._05};
`;
