import { BREAKPOINTS, COLORS } from "@/common";
import styled from "styled-components";

export const SelectContainer = styled.div`
  width: 30%;
  display: flex;
  height: min-content;
  justify-content: end;
  background: transparent;
  border-bottom: 1px solid ${COLORS.light._02};
  padding-bottom: 16px;
  @media (max-width: ${BREAKPOINTS.md}) {
    display: none;
  }
`;
export const SelectProduct = styled.select`
  border: 1px solid ${COLORS.light._02};
  border-radius: 5px;
  padding: 12px 12px 12px 24px;
  color: ${COLORS.gray._02};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;

  option {
    font-size: 16px;
  }
`;
