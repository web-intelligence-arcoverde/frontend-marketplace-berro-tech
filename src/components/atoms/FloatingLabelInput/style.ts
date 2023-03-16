import { COLORS } from "@/common";
import styled from "styled-components";

export const FormField = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;

export const Label = styled.label<{ active: boolean }>`
  display: ${(props) => (props.active ? "none" : "block")};
  position: absolute;
  top: 0;
  left: 0;
  font-size: 0;
  color: #999;
  transition: all 0.2s ease-in-out;
  pointer-events: none;
`;
export const Input = styled.input<{ active: boolean }>`
  height: 85px;
  width: 100%;
  max-width: 460px;
  border-radius: 5px;
  padding: 16px;
  color: ${COLORS.gray._01};
  font-weight: 500;
  font-size: 16px;
  border: solid 2px ${COLORS.light._02};
  padding-top: ${(props) => (props.active ? "16px" : "40px")};
  background: ${COLORS.light._04};
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
