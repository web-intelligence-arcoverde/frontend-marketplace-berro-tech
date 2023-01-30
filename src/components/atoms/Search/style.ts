import styled from "styled-components";
import { COLORS } from "@/common";

export const CardSearch = styled.div`
  position: relative;
  width: 100%;
  min-width: 400px;

  input {
    height: 42px;
    border-radius: 8px;
    border: solid 1px ${COLORS.gray_color_70};
    padding-left: 45px;
    font-size: 16px;
    font-weight: 500;
    width: 100%;

    ::placeholder {
      color: ${COLORS.black_color_70};
    }
  }
  img {
    position: absolute;
    left: 14px;
    top: 8px;
  }
`;
