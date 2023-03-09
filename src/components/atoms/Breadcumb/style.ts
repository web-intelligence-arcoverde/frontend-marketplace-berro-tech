import styled from "styled-components";
import { COLORS } from "@/common";

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
    color: ${COLORS.gray._01};
    width: max-content;
  }
  img {
    margin: 0 14px;
  }
  :last-child {
    a {
      pointer-events: none;

      font-weight: 500;
      color: ${COLORS.sub_brand._02};
    }
    img {
      display: none;
    }
  }

  ::first-letter {
    text-transform: uppercase;
  }
`;
