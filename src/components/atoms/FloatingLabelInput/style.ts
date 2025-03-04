'use client';

import { colors } from '@/common';
import styled from 'styled-components';

export const ContainerField = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FormField = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 1rem;
`;
export const EyeButton = styled.button`
  background: transparent;
  width: fit-content;
  height: fit-content;
  position: absolute;
  bottom: 25%;
  border: none;
  right: 20px;
  img {
    width: 24px;
    height: 24px;
  }
`;

export const Label = styled.label<{ active: boolean }>`
  display: ${(props) => (props.active ? 'none' : 'block')};
  position: absolute;
  top: 0;
  left: 0;
  font-size: 0;
  color: #999;
  transition: all 0.2s ease-in-out;
  pointer-events: none;
`;
export const Input = styled.input<{ active: boolean; isWhite?: boolean }>`
  height: 85px;
  width: 100%;
  border-radius: 5px;
  padding: 16px;
  color: ${colors.gray._01};
  font-weight: 500;
  font-size: 16px;
  border: solid 2px ${colors.light._02};
  padding-top: ${(props) => (props.active ? '16px' : '40px')};
  background: ${colors.light._04};
  background: ${(props) =>
    props.isWhite ? `${colors.light._05}` : `${colors.light._04}`};
  ::placeholder {
    font-weight: 400;
    color: ${colors.gray._03};
  }
  &:focus + label,
  &:not(:placeholder-shown) + label {
    top: 16px;
    left: 16px;
    color: ${colors.sub_brand._02};
    font-size: 14px;
    font-weight: 500;
  }
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 12px;
  margin-left: 10px;
  color: red;
`;
