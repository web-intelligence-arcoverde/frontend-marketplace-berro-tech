import { COLORS } from "@/common";
import styled from "styled-components";

export const CardInputs = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;

  input {
    width: 40px;
    text-align: center;
    background-color: ${COLORS.light._04};
    border: solid 1.5px ${COLORS.light._02};
    height: 56px;
  }
`;
