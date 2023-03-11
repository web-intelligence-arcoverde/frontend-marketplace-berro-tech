import { BREAKPOINTS, COLORS } from "@/common";
import styled from "styled-components";


export const SelectProduct = styled.select`
  border: 1px solid ${COLORS.light._02};
  border-radius: 5px;
  padding: 16px 24px;
  color: ${COLORS.gray._02};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;

  option {
    font-size: 16px;
  }
`;
