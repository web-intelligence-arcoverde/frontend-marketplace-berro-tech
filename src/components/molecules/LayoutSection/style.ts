import { breakpoints, colors } from '@/common';
import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 100px;
  border-bottom: 2px solid ${colors.light._02};

  p {
    color: ${colors.dark._04};
    line-height: 40px;
  }
  :first-child {
    background: ${colors.brand_light._04};
    align-items: baseline;
  }

  :nth-child(even) {
    flex-direction: row-reverse;

    aside {
      align-items: end;
    }

    #arrow {
      transform: rotate(180deg);
    }
  }
  :nth-child(3) {
    p {
      width: 360px;
    }
  }
  :nth-child(3),
  :nth-child(4) {
    #arrow {
      margin-top: 0;
    }
    h1 {
      margin-bottom: 8px;
    }

    aside {
      flex-direction: column-reverse;
    }
    :nth-child(4) {
      text-align: end;
      border: none;
      p {
        width: 300px;
        position: absolute;
        right: 0;
      }
    }
  }
  @media (max-width: ${breakpoints.sm}) {
    flex-direction: column !important;
    width: 100%;
    padding: 56px 20px;
    aside {
      align-items: flex-start !important;
      text-align: start;
    }
    #arrow {
      transform: rotate(90deg) !important;
      margin-bottom: 25px;
    }
    p {
      line-height: 32px;
      margin: 20px 0 30px 0;
      width: auto !important;
      text-align: start;
    }
    :nth-child(3) {
      footer {
        display: none;
      }
    }
    :nth-child(4) {
      p {
        width: auto;
        position: unset !important;
      }
    }
  }
`;
export const Content = styled.div`
  width: 35%;
  position: relative;
  @media (max-width: ${breakpoints.sm}) {
    width: 100%;
  }
`;

export const CardTitle = styled.aside`
  display: flex;
  flex-direction: column;
`;

export const Arrow = styled(Image)`
  margin: 20px 0;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  color: ${colors.sub_brand._02};
  font-weight: 500;
`;
export const CardChildren = styled.div`
  width: 60%;
  color: ${colors.dark._04};
  line-height: 45px;
  @media (max-width: ${breakpoints.sm}) {
    line-height: 32px;
    width: 100%;
  }
`;
export const CardSteps = styled.div`
  display: flex;
  margin-top: 120px;
  display: none;
`;
