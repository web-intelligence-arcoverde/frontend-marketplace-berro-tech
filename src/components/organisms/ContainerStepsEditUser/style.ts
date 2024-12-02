import { breakpoints, colors } from '@/common';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  min-height: 520px;
  border-radius: 5px;
  background: ${colors.light._05};
  @media (max-width: ${breakpoints.md}) {
    width: 100%;
    height: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  h6 {
    color: ${colors.gray._04};
    font-size: 14px;
    font-weight: 400;
  }
  h4 {
    margin-top: 8px;
    color: ${colors.gray._03};
    font-size: 16px;
    font-weight: 400;
    width: auto;
  }

  .active {
    border-bottom: 2px solid ${colors.brand_light._01};
    h4 {
      font-family: 500;
      color: ${colors.gray._01};
    }
  }
`;
export const StepsContainer = styled.div`
  width: 100%;
  padding: 12px;
  cursor: pointer;
  border-bottom: 2px solid ${colors.light._02};
  border-right: 2px solid ${colors.light._02};
`;

export const ContentStep = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
