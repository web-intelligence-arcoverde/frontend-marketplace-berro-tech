import styled from "styled-components";
import { COLORS } from "@/common";

export const ListBreadcumb = styled.ol`
  display: flex;
  padding: 16px;
  overflow-x: auto;

`
export const ItemBreadcumb = styled.li`
a{
  font-weight: 400;
  font-size: 14px;
  color: ${COLORS.gray._01};
 
}
img{
  margin: 0 14px;
}
:last-child{
  a{
    pointer-events: none;
    font-weight: 500;
    color: ${COLORS.sub_brand._02};
  }
  img{
    display: none;
  }
}
::first-letter{
    text-transform: uppercase;
  }
`