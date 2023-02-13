import Link from "next/link";
import styled from "styled-components";
import { COLORS } from "@/common";
interface CardButtonProps {
  padding?: string;
  maxWidth?: string;
  disabled?: boolean;
}

export const CardButton = styled.button<CardButtonProps>`
  width: 100%;
  font-weight: 600;
  height: 56px;
  background-color: ${COLORS.brand_light._01};
  color: ${COLORS.brand_dark._01};
  border: none;
  font-size: 15px;
  border-radius: 5px;
  padding: ${(props) => (props.padding ? props.padding : "12px")};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "")};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  filter: ${({ disabled }) => disabled && "brightness(75%);"};
`;

export const CardButtonLink = styled(Link)`
  display: flex;
  width: 100%;
  font-weight: 600;
  height: 56px;
  background-color: ${COLORS.brand_light._03};
  color: ${COLORS.brand_dark._02};
  border: none;
  font-size: 15px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const CardButtonAuthentication = styled.button`
  display: flex;
  width: 100%;
  font-weight: 600;
  height: 56px;
  background-color: transparent;
  color: ${COLORS.gray._02};
  border: 2px solid ${COLORS.light._02};
  font-size: 15px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
