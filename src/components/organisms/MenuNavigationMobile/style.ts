import { breakpoints, colors } from '@/common';
import styled from 'styled-components';

export const ContainerMenu = styled.div`
  display: none;
  padding: 60px 20px;

  @media (max-width: ${breakpoints.sm}) {
    display: flex;
    flex-direction: column;
    gap: 100px;
    position: absolute;
    left: 0;
    top: 116px;
    z-index: 10;
    width: 100%;
    height: 100vh;
    background-color: ${colors.light._05};
  }
`;

export const CardButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  #enter {
    background-color: ${colors.brand_light._01};
    color: ${colors.brand_dark._01};
  }
`;

export const CardNavigation = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  a {
    padding-left: 56px;
    color: ${colors.gray._01};
    font-size: 1.125rem;
    line-height: 60px;
    border-left: 2px solid ${colors.light._02};
  }
  #active {
    font-weight: 500;
    color: ${colors.sub_brand._02};
    border-left: solid 2px ${colors.sub_brand._02};
  }
`;
