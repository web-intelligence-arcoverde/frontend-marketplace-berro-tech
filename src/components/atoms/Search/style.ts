import styled from "styled-components";
import { BREAKPOINTS, COLORS } from "@/common";
import Image from "next/image";

interface CardSearchProps {
  width?: string;
  borderInput?: string;
  borderRight?: string;
  widthMobile?: string;
  displayNone?: string;
}

export const CardSearch = styled.form<CardSearchProps>`
  position: relative;
  width: 100%;
  min-width: 400px;
  display: flex;
  justify-content: end;
  align-items: center;
  @media (max-width: ${BREAKPOINTS.sm}) {
    min-width: 0;
    position: sticky;
  }

  input {
    height: 48px;
    border: solid 1px ${COLORS.light._02};
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
      color: ${COLORS.gray._02};
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
  @media (max-width: ${BREAKPOINTS.sm}) {
    input {
      width: ${(props) => (props.widthMobile ? props.widthMobile : "44px")};
      height: 40px;
      padding: 0 5px;
      border-radius: 5px;
      cursor: pointer;
      ::placeholder {
        color: transparent;
      }
    }
    button {
      display: none;
    }
  }
`;

export const IconLupa = styled(Image)<CardSearchProps>`
  position: relative;
  left: 32px;

  @media (max-width: ${BREAKPOINTS.sm}) {
    pointer-events: none;
    display: ${(props) => (props.displayNone ? props.displayNone : "block")};
  }
`;
