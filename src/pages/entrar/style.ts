import styled from "styled-components";
import { COLORS } from "@/common";

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const LostPassword = styled.a`
color: ${COLORS.blue_color};
font-size: 14px;
text-align: end;
position: relative;
bottom: 10px;
`
