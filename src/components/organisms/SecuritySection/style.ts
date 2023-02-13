import styled from "styled-components";
import { COLORS } from "@/common";

export const Container = styled.section`
  background: ${COLORS.light._05};
  padding: 0 100px;
  height: 944px;
  border-top: 1px solid  ${COLORS.light._02};
  border-bottom: 1px solid  ${COLORS.light._02};
  display: flex;
  justify-content: space-between;
  gap: 136px;
`;
export const DescriptionContainer = styled.div`
  width: 592px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 112px 0;
  p{
    font-weight: 400;
    font-size: 18px;
    color: ${COLORS.gray._02};
  }
  h2{
    font-weight: 700;
    font-size: 40px;
    color: ${COLORS.brand_dark._01};
  }
`;
export const StampContainer = styled.div`
  width: 448px;
  background: ${COLORS.sub_brand._04};
  padding: 112px 64px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  figure{
    background: ${COLORS.opacity.blue_01};
    border-radius: 5px;
    padding: 28px;
    width: fit-content;
  }
`;
export const LinkContainer = styled.a`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;

  h6{
    width: max-content;
    word-wrap: break-word;
    font-weight: 450;
    font-size: 18px;
    color: ${COLORS.sub_brand._02};
  }
 img,svg{
  width: fit-content;
  transform: rotate(270deg);
 }

`;
