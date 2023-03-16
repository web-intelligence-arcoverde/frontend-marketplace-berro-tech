import { COLORS } from "@/common";
import Image from "next/image";
import styled from "styled-components";

export const FormField = styled.div`
  position: relative;
  margin-bottom: 1rem;
  img {
    position: absolute;
    right: 16px;
    top: 32px;
    cursor: pointer;
  }
`;

export const Label = styled.label<{ active: boolean }>`
  display: ${(props) => (props.active ? "none" : "flex")};
  position: absolute;
  top: 0;
  left: 0;
  font-size: 0;
  color: #999;
  transition: all 0.2s ease-in-out;
  pointer-events: none;
`;
export const Input = styled.input<{ active: boolean; open: boolean }>`
  height: 85px;
  width: 100%;
  max-width: 460px;
  border-radius: ${(props) => (props.open ? "5px 5px 0 0" : "5px")};
  padding: 16px;
  color: ${COLORS.gray._01};
  font-weight: 500;
  font-size: 16px;
  border: solid 2px ${COLORS.light._02};
  padding-top: ${(props) => (props.active ? "16px" : "40px")};
  background: ${(props) =>
    props.open ? `${COLORS.brand_light._04}` : `${COLORS.light._04}`};
  cursor: pointer;
  ::placeholder {
    font-weight: 400;
    color: ${COLORS.gray._03};
  }
  &:focus + label,
  &:not(:placeholder-shown) + label {
    top: 16px;
    left: 16px;
    color: ${COLORS.sub_brand._02};
    font-size: 14px;
    font-weight: 500;
  }
`;
export const CardOptions = styled.div`
  border: solid 2px ${COLORS.light._02};
  border-radius: 0 0 5px 5px;
  border-top: none;
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 24px 16px;
  background: ${COLORS.light._04};

  input {
    margin-right: 16px;
  }
`;

export const ArrowDown = styled(Image)`
  transform: rotate(180deg);
`;
