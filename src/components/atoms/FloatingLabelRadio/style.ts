import { colors } from '@/common';
import Image from 'next/image';
import styled from 'styled-components';

export const FormField = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 1rem;
  img {
    position: absolute;
    right: 16px;
    top: 32px;
    cursor: pointer;
  }
`;

export const Label = styled.label<{ active: boolean }>`
  display: ${(props) => (props.active ? 'none' : 'flex')};
  position: absolute;
  top: 0;
  left: 0;
  font-size: 0;
  color: #999;
  transition: all 0.2s ease-in-out;
  pointer-events: none;
`;
export const Input = styled.input<{
  active: boolean;
  open: boolean;
  isWhite?: boolean;
}>`
  height: 85px;
  width: 100%;
  border-radius: ${(props) => (props.open ? '5px 5px 0 0' : '5px')};
  padding: 16px;
  color: ${colors.gray._01};
  font-weight: 500;
  font-size: 16px;
  border: solid 2px ${colors.light._02};
  padding-top: ${(props) => (props.active ? '16px' : '40px')};
  background: ${(props) =>
    props.isWhite
      ? `${colors.light._05}`
      : props.open
        ? `${colors.brand_light._04}`
        : `${colors.light._04}`};
  cursor: pointer;
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
`;
export const CardOptions = styled.div<{ isWhite?: boolean }>`
  border: solid 2px ${colors.light._02};
  border-radius: 0 0 5px 5px;
  border-top: none;
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 24px 16px;

  overflow-y: scroll;
  height: 200px;
  position: absolute;
  z-index: 9999;
  width: 100%;

  background: ${(props) =>
    props.isWhite ? `${colors.light._05}` : `${colors.light._04}`};

  input {
    margin-right: 16px;
  }
`;

export const ArrowDown = styled(Image)`
  transform: rotate(180deg);
`;
