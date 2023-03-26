import { BREAKPOINTS, COLORS } from "@/common";
import Image from "next/image";
import styled from "styled-components";

export const DropedImagesCard = styled.div`
position: relative;
background: ${COLORS.light._05};
img,video{
  width:167px; 
  height:120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  object-fit: cover;
  border: 5px;
}
span{
  padding: 4px 12px;
  position: absolute;
  width: 65px;
  height: 32px;
  left: 16px;
  top: 16px;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(2.5px);
  border-radius: 5px;
  display: flex; 
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0.02em;
  color: ${COLORS.gray._01};
}
@media (max-width:${BREAKPOINTS.md}) {
  width: 100%;
  img,video{
    width:100%; 
    height:120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 5px;
  }
  }
`;
export const DropImage = styled.div`
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(2.5px);
  cursor: pointer;
  position: absolute;
  padding: 4px;
  max-width: 28px;
  max-height: 28px;
  img{
  max-width: 20px;
  max-height: 20px;
}
  top: 16px;
  right: 16px;
  border-radius: 5px;
`;

