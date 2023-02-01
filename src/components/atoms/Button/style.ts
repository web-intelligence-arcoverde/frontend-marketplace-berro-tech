import styled from "styled-components";
import { COLORS } from "@/common";

interface CardButtonProps {
    padding?: string;
  }

export const CardButton = styled.button<CardButtonProps>`
    width: 100%;
    font-weight: 500;
    height: 42px;
    background-color: ${COLORS.black_color_70};
    color: ${COLORS.white_color_100};
    border: none;
    border-radius: 8px;
    padding: ${(props) => (props.padding ? props.padding : "12px")};
`;
