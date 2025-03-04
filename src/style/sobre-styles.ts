import styled from 'styled-components';
import { breakpoints, colors } from '@/common';
import Image from 'next/image';

export const Presentation = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${colors.light._05};
`;

export const ListSections = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: ${colors.light._05};
`;
export const PrintImage = styled(Image)`
  width: 100%;
  border: 1px solid ${colors.light._02};
  border-top: 4px solid ${colors.brand_light._01};
  border-radius: 5px;
  object-fit: cover;
  @media (max-width: ${breakpoints.sm}) {
    display: none;
  }
`;
export const PrintImageMobile = styled(Image)`
  display: none;
  @media (max-width: ${breakpoints.sm}) {
    width: 100%;
    display: block;
    padding-top: 0;
    border-top: 4px solid ${colors.brand_light._01};
    border-radius: 5px;
  }
`;

export const StyleImage = styled(Image)`
  width: 100%;
  @media (max-width: ${breakpoints.sm}) {
    display: none;
  }
`;
export const StyledImageMobile = styled(Image)`
  display: none;
  @media (max-width: ${breakpoints.sm}) {
    display: block;
    margin-top: 50px;
    width: auto;
  }
`;

export const ContainerPresentation = styled.div`
  display: flex;
  width: 100%;
  padding: 100px;
  align-items: end;
  justify-content: space-between;
  color: ${colors.dark._03};

  h1 {
    width: 100%;
    line-height: 80px;
    font-size: 2.5rem;
    font-weight: 700;
    max-width: 900px;
  }
  h6 {
    line-height: 60px;
    font-size: 16px;
    font-weight: 400;
    display: flex;
    align-items: center;
    span {
      width: max-content;
    }
  }
  img {
    margin-left: 10px;
  }

  @media (max-width: ${breakpoints.sm}) {
    padding: 0;
    flex-direction: column;

    h1 {
      width: 90%;
      justify-content: center;
      font-size: 28px;
      line-height: 42px;
      padding: 60px 20px 40px 20px;
      margin: 0 auto;
    }
    h6 {
      padding-right: 20px;
    }
  }
`;
