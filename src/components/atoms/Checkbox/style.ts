import { COLORS } from "@/common";
import styled from "styled-components";

export const Container = styled.div`
  padding: 32px 16px;
  display: flex;
  gap: 20px;
  label{
    font-weight: 400;
    font-size: 16px;
    color: ${COLORS.gray._02};
  }
`
export const CheckboxInput = styled.input`
padding: 2px;
`
