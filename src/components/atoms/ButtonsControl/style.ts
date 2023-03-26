import { BREAKPOINTS, COLORS } from "@/common";
import styled from "styled-components";

export const CardButtons = styled.div`
  display: flex;
  gap: 20px;
  border: 1.5px solid ${COLORS.light._02};
  padding: 0 24px;
  background-color: ${COLORS.light._05};

  @media (max-width: ${BREAKPOINTS.sm}) {
    padding: 10px 24px;
    border: none;
  }
  Button {
    font-weight: 500;
    margin: 20px 0;

    :first-child {
      background-color: ${COLORS.light._02};
      color: ${COLORS.gray._02};
    }
    :last-child {
      background-color: rgba(211, 60, 37, 0.1);
      color: ${COLORS.auxiliary.red_negative};
    }
  }
`;
