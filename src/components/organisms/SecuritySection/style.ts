import styled from "styled-components";
import { BREAKPOINTS, COLORS } from "@/common";
import Link from "next/link";

export const Container = styled.section`
  background: ${COLORS.light._05};
  padding: 0 100px;
  height: 944px;
  border-top: 1px solid  ${COLORS.light._02};
  border-bottom: 1px solid  ${COLORS.light._02};
  display: flex;
  justify-content: space-between;
  gap: 136px;
  @media (max-Width:${BREAKPOINTS.md}) {
    padding: 0;
    flex-direction: column;
    height: auto;
    gap: 100px;
  }
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
  figure{
    display: none;
  }
  @media (max-Width:${BREAKPOINTS.md}) {
    width: 100%;
    align-items: flex-start;
    padding: 20px;
    height: auto;
    p{
      font-weight: 450;
      font-size: 16px;
      line-height: 200%;
      letter-spacing: 0.02em;
    }
    h2{
      margin-top: 112px;
      font-weight: 700;
      font-size: 28px;
      line-height: 150%;
      letter-spacing: 0.02em;
    }
    figure{
      display:inline ;
      background: ${COLORS.opacity.blue_01};
      border-radius: 5px;
      margin-bottom: 20px;
      padding: 28px;
      width: fit-content;
    }
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
  @media (max-Width:${BREAKPOINTS.md}) {
    width: 100%;
    padding: 28px;
    border-top: 1px solid  ${COLORS.light._02};
    figure{
      display: none;
    }
  }
`;
export const LinkContainer = styled(Link)`
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
 @media (max-Width:${BREAKPOINTS.md}) {
  justify-content: center;
  gap: 20px;
}
`;
