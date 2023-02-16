import styled from "styled-components";
import { BREAKPOINTS, COLORS } from "@/common";
import { IMAGES } from "@/assets";

export const Intro = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  height: 600px;
  background: linear-gradient(
      95deg,
      #f8f3df 17.31%,
      rgba(248, 243, 223, 0) 95.98%
    ),
    linear-gradient(80.03deg, #f8f3df 12.55%, rgba(248, 243, 223, 0) 37.36%),
    url(${IMAGES.BackgroundPresentation?.src});
  background-size: cover;
  background-position: center ;

  @media (max-width:${BREAKPOINTS.md} ) {
    background: linear-gradient(141.23deg, #F8F3DF 0%, rgba(248, 243, 223, 0) 77.79%), linear-gradient(166.65deg, #F8F3DF 37.3%, rgba(248, 243, 223, 0) 90.44%),url(${IMAGES.BackgroundPresentation?.src});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center ;
    height: 622px;
  }
`;

export const DescriptionPresentation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 100px;
  width: 30%;
  z-index: 5;

  h1,
  p {
    width: 440px;
  }
  h6 {
    width: fit-content;
    padding: 12px 20px;
    color: ${COLORS.sub_brand._02};
    font-size: 16px;
    font-weight: 600;
    background-color: ${COLORS.opacity.blue_05};
    border-radius: 5px;
  }
  h1 {
    color: ${COLORS.brand_dark._01};
    font-weight: 800;
    font-size: 40px;
    line-height: 60px;
  }
  p {
    color: ${COLORS.brand_dark._02};
    font-weight: 800px;
    font-size: 18px;
    line-height: 36px;
  }

  @media (max-width:${BREAKPOINTS.md} ) {
    width: 100%;
   padding: 0 20px 100px 20px ;
   margin-bottom: 100px;
   h1,p{
    width: 100%;
    
  }
  h1{
     font-size: 28px;
     font-weight: 700;
     line-height: 150%;
     letter-spacing: 0.02em;
   }
   p{
    font-weight: 450;
    font-size: 16px;
   }
  }
`;
