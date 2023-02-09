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
  background-color: ${COLORS.white_color_50};
  ::placeholder {
    color: ${COLORS.gray_color_010};
  }
`;
export const TextLabel = styled.label`
text-transform: capitalize;
`

export const CardInputUser = styled.div`
  display: flex;
  align-items: center;
  border: 1.5px solid ${COLORS.gray_color_13};
  border-radius: 5px;
  padding: 16px;
  color: ${COLORS.gray_color_010};
  background-color: ${COLORS.white_color_50};
 justify-content: space-between;
 height: 85px;

 button{
  background: none;
  border: none;
 }
`;
