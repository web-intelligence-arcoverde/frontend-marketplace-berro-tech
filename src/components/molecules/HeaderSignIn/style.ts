import { breakpoints, colors } from '@/common';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 24px;

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
    img {
      position: relative;
      bottom: 10px;
    }

    h5 {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      width: 290px;
    }
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
`;
