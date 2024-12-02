import styled from 'styled-components';
import { colors, breakpoints } from '@/common';

export const MaxContainer = styled.footer`
  background-color: ${colors.light._04};
  width: 100%;
`;

export const ContainerFooter = styled.div`
  display: flex;
  flex-direction: column;
  padding: 66px 100px 26px 100px;
  gap: 16px;
  min-height: 200px;
  margin: 0 auto;
  max-width: ${breakpoints.xxg};
  @media (max-width: ${breakpoints.sm}) {
    padding: 60px 0;
    height: auto;
    min-height: 0;
  }
`;

export const CardCopyright = styled.ul`
  display: flex;
  gap: 32px;
  a {
    color: ${colors.gray._03};
  }
  @media (max-width: ${breakpoints.sm}) {
    flex-wrap: wrap;
    width: 100%;
    font-size: 13px;
    justify-content: center;
    gap: 28px 30px;
    border-top: 2px solid ${colors.light._02};
    padding: 50px 20px 0 20px;
  }
`;
export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const CardFlex = styled(Flex)`
  @media (max-width: ${breakpoints.sm}) {
    flex-direction: column-reverse;
  }
`;
export const CardLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${breakpoints.sm}) {
    #arrow-up {
      display: none;
    }
  }
  @media (max-width: ${breakpoints.sm}) {
    padding: 6px 20px;
  }
`;
