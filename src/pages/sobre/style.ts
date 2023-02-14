import styled from "styled-components";
import { COLORS } from "@/common";
import Image from "next/image";

export const Presentation = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;
export const StyleImage = styled(Image)`
  width: 100%;
`;

export const ContainerPresentation = styled.div`
  display: flex;
  width: 100%;
  padding: 100px;
  align-items: end;
  justify-content: space-between;
  color: ${COLORS.dark._03};

  h1 {
    width: 80%;
    line-height: 80px;
    font-size: 2.5rem;
    font-weight: 700;
  }
  h6 {
    line-height: 60px;
    font-size: 16px;
    font-weight: 400;
    display: flex;
    align-items: center;
  }
  img {
    margin-left: 10px;
  }
`;
