import styled from "styled-components";
import { COLORS } from "@/common/colors";

export const CardInput = styled.div`
  width: 100%;
  min-width: 400px;
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
