import styled from "styled-components";
import { COLORS } from "@/common";
import Image from "next/image";

interface CardSearchProps {
  width?: string;
  borderInput?: string;
  borderRight?: string;
}

export const CardSearch = styled.form<CardSearchProps>`
  position: relative;
  width: 100%;
  min-width: 400px;
  display: flex;
  justify-content: end;
  align-items: center;

  input {
    height: 48px;
    border: solid 1px ${COLORS.gray_color_13};
    padding: 0 25px 0 45px;
    font-size: 16px;
    font-weight: 500;
    width: ${(props) => (props.width ? props.width : "100%")};
    border-radius: ${(props) =>
      props.borderInput ? props.borderInput : "5px"};
    border-right: ${(props) => (props.borderRight ? props.borderRight : "")};
    transition: all 0s;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

    ::placeholder {
      color: ${COLORS.black_color_70};
    }
  }

  button {
    width: 52px;
    height: 46px;
    border: none;
    border-radius: 0 5px 5px 0;
    transition: all 0s;
    img {
      position: inherit;
    }
  }
`;

export const IconLupa = styled(Image)`
  position: relative;
  left: 32px;
`;
