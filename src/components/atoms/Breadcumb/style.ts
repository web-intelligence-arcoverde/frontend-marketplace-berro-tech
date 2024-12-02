import styled from 'styled-components';
import { colors } from '@/common';

export const ListBreadcumb = styled.ol`
  display: flex;
  padding: 16px 24px;
  overflow-x: hidden;
`;
export const ItemBreadcumb = styled.li`
  display: flex;
  align-items: center;
  a {
    font-weight: 400;
    font-size: 14px;
    color: ${colors.gray._01};
    width: max-content;
  }
  img {
    margin: 0 14px;
  }
  :last-child {
    display: none;
  }
  :nth-last-child(2) {
    a {
      pointer-events: none;

      font-weight: 500;
      color: ${colors.sub_brand._02};
    }
    img {
      display: none;
    }
  }

  ::first-letter {
    text-transform: uppercase;
  }
`;
