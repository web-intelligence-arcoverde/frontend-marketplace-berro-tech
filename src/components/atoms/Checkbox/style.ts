import { COLORS } from "@/common";
import styled from "styled-components";

export const Container = styled.div`
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
margin-bottom: 48px;
`
