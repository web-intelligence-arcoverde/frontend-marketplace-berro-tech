import styled from "styled-components";
import { COLORS } from "@/common/colors";

interface InputProps {
  width?: string;
}

export const CardInput = styled.div<InputProps>`
  width: ${(props) => (props.width ? props.width : "100%")};

  input {
    height: 42px;
    border-radius: 8px;
    border: solid 1px ${COLORS.gray_color_70};
    padding-left: 20px;
    font-size: 16px;
    font-weight: 500;
    width: 100%;

    ::placeholder {
      color: ${COLORS.black_color_70};
    }
  }
`;
