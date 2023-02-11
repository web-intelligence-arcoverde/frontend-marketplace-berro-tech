import styled from "styled-components";
import { COLORS } from "@/common";

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const LostPassword = styled.a`
color: ${COLORS.sub_brand._02};
font-size: 14px;
text-align: end;
position: relative;
bottom: 10px;
`
