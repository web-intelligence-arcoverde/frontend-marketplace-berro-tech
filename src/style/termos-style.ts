import { breakpoints, colors } from '@/common';
import styled from 'styled-components';

export const TitleSection = styled.section`
  background: ${colors.brand_light._03};
  padding: 100px;
  display: flex;
  align-items: end;
  flex-wrap: wrap;
  justify-content: space-between;
  h1 {
    font-weight: 700;
    font-size: 40px;
    color: ${colors.dark._03};
  }
  p {
    font-weight: 450;
    font-size: 18px;
    color: ${colors.brand_dark._01};
  }
  @media (max-width: ${breakpoints.sm}) {
    flex-direction: column;
    padding: 50px 20px;
    gap: 50px;
    align-items: flex-start;
    h1 {
      font-weight: 700;
      font-size: 28px;
    }
    p {
      text-align: end;
      align-self: flex-end;
    }
  }
`;
export const ContentSection = styled.section`
  width: 100%;
  display: flex;
  gap: 50px;
  padding: 100px;

  @media (max-width: ${breakpoints.sm}) {
    flex-direction: column;
    padding: 0 20px;
    gap: 20px;
    align-items: flex-start;
  }
`;
export const Content = styled.div`
  border-bottom: 1px solid ${colors.light._02};
  ul {
    margin-top: 30px;
    margin-left: 50px;
    li {
      list-style: disc;
      margin-bottom: 30px;
      font-weight: 400;
      font-size: 18px;
      line-height: 200%;
      letter-spacing: 0.02em;
      color: ${colors.dark._04};
    }
  }
  h6 {
    font-weight: 600;
    font-size: 18px;
    letter-spacing: 0.02em;
    margin: 16px 0;
    color: ${colors.dark._04};
  }
  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 200%;
    letter-spacing: 0.02em;
    color: ${colors.dark._04};
    font-variation-settings: 'slnt' 0;
  }
`;
export const ContentTitleContainer = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: column;
  max-width: 360px;
  max-height: 295px;
  overflow: auto;
  @media (max-width: ${breakpoints.sm}) {
    flex-direction: row;
    padding: 50px 20px;
    gap: 20px;
    border-bottom: 1px solid ${colors.light._02};
    align-items: flex-start;
  }
`;
export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const TitleLink = styled.a<{ isActive?: boolean }>`
  padding: 16px 24px;
  font-weight: 500;
  font-size: 18px;
  color: ${(props) => (props.isActive ? colors.dark._03 : colors.gray._03)};
  background: ${(props) =>
    props.isActive ? colors.sub_brand._03 : 'tranparent'};
  border-left: ${(props) =>
    props.isActive && `3px solid ${colors.sub_brand._02}}`};
  @media (max-width: ${breakpoints.sm}) {
    white-space: nowrap;
  }
`;
