import styled from "styled-components";
import { COLORS } from "@/common";
interface InputProps {
  width?: string;
}

export const Input = styled.input<InputProps>`
  height: 42px;
  border-radius: 8px;
  border: solid 1px ${COLORS.gray_color_70};
  padding-left: 20px;
  font-size: 16px;
  font-weight: 500;
  width: ${(props) => (props.width ? props.width : "100%")};

  ::placeholder {
    color: ${COLORS.black_color_70};
  }
`;
