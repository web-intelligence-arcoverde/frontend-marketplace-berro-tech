import styled from 'styled-components';
import { breakpoints, colors } from '@/common';
import { CardButton } from '@/components/atoms/Button/style';

export const Main = styled.main`
  width: 100%;
  max-width: ${breakpoints.xxg};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const ButtonAddProduct = styled(CardButton)`
  background-color: ${colors.sub_brand._02};
  color: ${colors.light._05};
  width: 100%;

  @media (max-width: ${breakpoints.sm}) {
    display: none;
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
  @media (max-width: ${breakpoints.sm}) {
    width: 100%;
    .tabs {
      width: 100%;
      border-bottom: none;
      padding-bottom: 0;
      .tab {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export const StyleDesktop = styled.div`
  @media (max-width: ${breakpoints.md}) {
    display: none;
  }
`;
export const StyleMobile = styled.div`
  display: none;
  @media (max-width: ${breakpoints.md}) {
    display: block;
    width: 100%;
  }
`;
