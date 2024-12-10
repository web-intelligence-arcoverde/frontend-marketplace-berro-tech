'use client';

import styled from 'styled-components';
import { breakpoints, colors } from '@/common';
import Image from 'next/image';

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
  @media (max-width: ${breakpoints.sm}) {
    min-width: 0;
    justify-content: center;
    width: 100%;
    align-items: center;
  }

  input {
    height: 48px;
    border: solid 1px ${colors.light._02};
    padding: 0 25px 0 45px;
    font-size: 16px;
    font-weight: 500;
    width: ${(props) => (props.width ? props.width : '100%')};
    border-radius: ${(props) =>
      props.borderInput ? props.borderInput : '5px'};
    border-right: ${(props) => (props.borderRight ? props.borderRight : '')};
    transition: all 0s;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

    ::placeholder {
      color: ${colors.gray._02};
    }
  }

  button {
    width: 52px;
    height: 48px;
    border: none;
    border-radius: 0 5px 5px 0;
    transition: all 0s;
    img {
      position: inherit;
    }
  }
  @media (max-width: ${breakpoints.sm}) {
    input {
      width: 100%;
      height: 56px;
      padding: 10px 10px 10px 40px;
      border-radius: ${(props) =>
        props.borderInput ? props.borderInput : '5px'};
      margin: 0 auto;
      cursor: pointer;
      ::placeholder {
        padding-left: 10px;
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

  @media (max-width: ${breakpoints.sm}) {
    pointer-events: none;
  }
`;

export const ButtonSearchMobile = styled.button`
  display: none;

  @media (max-width: ${breakpoints.md}) {
    display: block !important;
    background-color: ${colors.sub_brand._02};
    color: ${colors.light._02};
    height: 54px !important;
    padding: 10px;
    min-width: 90px;
  }
`;
