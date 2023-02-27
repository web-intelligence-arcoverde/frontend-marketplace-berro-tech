import { COLORS } from "@/common";
import styled from "styled-components";

export const StyleDropDown = styled.ul`
  background-color: ${COLORS.light._05};
  border-radius: 5px 0 5px 5px;
  border: solid 2px ${COLORS.light._02};
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  cursor: default;

  li {
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 14px;
    color: ${COLORS.gray._02};
    font-size: 14px;
    line-height: 21px;
    border-bottom: solid 2px ${COLORS.light._02};
    padding-bottom: 24px;
    cursor: pointer;
    :last-child {
      border-bottom: none;
      padding-bottom: 0;
    }
    span {
      width: max-content;
    }
  }
`;
