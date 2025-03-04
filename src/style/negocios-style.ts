import { breakpoints, colors } from '@/common';
import styled from 'styled-components';

export const BussinesContainer = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 60px;
  background-color: ${colors.light._05};
  width: 100%;
  margin: 0 auto;
  padding: 45px 112px;
  max-width: ${breakpoints.xxg};
  min-height: 27vw;
  @media (max-width: ${breakpoints.md}) {
    flex-direction: column;
    gap: 20px;
    padding: 0;
  }
`;
export const ProductContainer = styled.div`
  display: flex;
  width: 70%;
  min-width: 800px;
  flex-direction: column;
  @media (max-width: ${breakpoints.md}) {
    width: 100%;
    padding: 0 20px;
    min-width: 0;
  }
`;

export const SelectContainer = styled.div`
  width: 30%;
  display: flex;
  height: min-content;
  justify-content: end;
  background: transparent;
  border-bottom: 1px solid ${colors.light._02};
  padding-bottom: 12px;
  @media (max-width: ${breakpoints.md}) {
    display: none;
  }
`;

export const ProductHeaderContainer = styled.div`
  display: flex;
`;

export const ProductCardContainer = styled.div`
  margin-top: 16px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 32px 16px;

  @media (max-width: ${breakpoints.md}) {
    justify-content: center;
    margin-top: 28px;
  }
`;

export const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  .tabs {
    border-bottom: 1px solid ${colors.light._02};
    display: flex;
    padding-bottom: 16px;
    .tab {
      border-radius: 5px;
      cursor: pointer;
      font-weight: 400;
      font-size: 16px;
      color: ${colors.gray._03};
      padding: 12px 24px;
    }
    .active {
      font-weight: 500;
      color: ${colors.brand_dark._03};
      background: ${colors.brand_light._03};
    }
  }
  flex-direction: column;
  @media (max-width: ${breakpoints.md}) {
    width: 100%;
    .tabs {
      padding: 0;
      border-radius: 7px;
      width: 100%;
      border: 1px solid ${colors.light._02};
      .tab {
        width: 100%;
        text-align: center;
        font-size: 14px;
      }
    }
  }
`;
