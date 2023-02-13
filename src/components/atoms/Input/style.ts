import styled from "styled-components";
import { COLORS } from "@/common";
interface InputProps {
  width?: string;
}

export const Input = styled.input<InputProps>`
  height: 42px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  width: ${(props) => (props.width ? props.width : "100%")};
  font-size: 16px;
  background-color: ${COLORS.light._04};
  ::placeholder {
    color: ${COLORS.gray._04};
  }
`;
export const TextLabel = styled.label`
  text-transform: capitalize;
`;

export const CardInputUser = styled.div`
  display: flex;
  align-items: center;
  border: 1.5px solid ${COLORS.light._02};
  border-radius: 5px;
  padding: 16px;
  color: ${COLORS.gray._04};
  background-color: ${COLORS.light._04};
  justify-content: space-between;
  height: 85px;

  button {
    background: none;
    border: none;
  }
`;
