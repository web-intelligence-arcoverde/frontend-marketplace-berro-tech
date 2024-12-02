import styled from 'styled-components';
import { breakpoints, colors } from '@/common';

export const Container = styled.div`
  border: solid 1.5px ${colors.light._02};
  border-radius: 5px;
  padding-bottom: 24px;
  width: 500px;

  @media (max-width: ${breakpoints.sm}) {
    width: 100%;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 24px;

  @media (max-width: ${breakpoints.sm}) {
    img {
      position: relative;
      bottom: 10px;
    }
  }
`;

export const Texts = styled.div`
  h4 {
    font-weight: 600;
    font-size: 1.125rem;
    color: ${colors.dark._04};
  }
  h5 {
    margin-top: 12px;
    font-weight: 400;
    font-size: 1rem;
    color: ${colors.sub_brand._02};
  }
  @media (max-width: ${breakpoints.sm}) {
    h5 {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      width: 290px;
    }
  }
`;

export const Row = styled.div`
  height: 2px;
  width: 100%;
  background-color: ${colors.light._02};
`;

export const CardButton = styled.div`
  padding: 24px 24px 0 24px;
`;

export const CardChildren = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
`;
