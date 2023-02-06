import styled from "styled-components";
import { COLORS } from "@/common/index";

export const Container = styled.div`
  border-top: 1.5px solid ${COLORS.gray_color_13};
  padding: 24px;
  display: flex;
  width: 100%;
  gap: 24px;

  button ,a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a {
    width: 100%;
    padding: 0px 16px;
    margin: 0;
    gap: 15px;
    border-radius: 5px;
    background: ${COLORS.auxiliars_green};
    font-weight: 600;
    font-size: 16px;
    color: ${COLORS.white_color_100};
  }
  
  button {
    width: fit-content;
    border-radius: 5px;
    border: 1.5px solid ${COLORS.gray_color_13};
    background: ${COLORS.white_color_100};
  }
`;