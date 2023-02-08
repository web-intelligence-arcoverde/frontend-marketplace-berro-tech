import styled from "styled-components";
import { COLORS } from "@/common";

interface CardButtonProps {
  padding?: string;
  maxWidth?: string;
}

export const CardButton = styled.button<CardButtonProps>`
  width: 100%;
  font-weight: 600;
  height: 48px;
  background-color: ${COLORS.secondary_color};
  color: ${COLORS.white_color_100};
  border: none;
  font-size: 15px;
  border-radius: 5px;
  padding: ${(props) => (props.padding ? props.padding : "12px")};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "")};
  justify-content: center;
  align-items: center;
  gap: 12px;
`;
