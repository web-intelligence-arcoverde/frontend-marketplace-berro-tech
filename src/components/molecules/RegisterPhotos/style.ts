import { BREAKPOINTS, COLORS } from "@/common";
import styled from "styled-components";

export const Container = styled.div`
padding: 20px;
flex: 1;
display: flex;
@media (max-width:${BREAKPOINTS.md}) {
  padding: 0;
}
`
export const ButtonAddImage = styled.button`
background: ${COLORS.light._04};
border: 1.5px solid ${COLORS.light._02};
border-radius: 5px;
padding: 16px;
display: flex;
`
export const DropedContainer = styled.div`
background: ${COLORS.light._05};
border: 1.5px solid ${COLORS.light._02};
border-radius: 5px;
width: 100%;
height: fit-content;
`
export const ButtonsContainer = styled.div`
  width: 50%;
  display: flex;
  gap: 16px;
  @media (max-width:${BREAKPOINTS.md}) {
  padding: 20px;
  width: 100%;
}
  
`


export const DropedHeader = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 24px;
p{
    margin-bottom: 4px;
    white-space: nowrap;
    font-weight: 500;
    font-size: 16px;
    color: ${COLORS.gray._02};
  }
  span{
    font-weight: 400;
    font-size: 14px;
    color: ${COLORS.gray._04};
  }
  
`
export const DropedImagesContainer = styled.div`
width: 100%;
background: ${COLORS.light._04};
border-top: 1.5px solid ${COLORS.light._02};
padding: 24px;
display: flex;
flex-wrap: wrap;
gap:12px;

@media (max-width:${BREAKPOINTS.md}) {
  flex-wrap: nowrap;
  overflow: auto;
  align-items: center;
  flex-direction: column;
  
}

`
export const NextButton = styled.button`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  border: none;
  background: ${COLORS.sub_brand._02};
  border-radius: 5px;
  font-weight: 600;
  font-size: 16px;
  color: ${COLORS.light._05};
`;
export const PaddingMobile = styled.div`
@media (max-width:${BREAKPOINTS.md}) {
  padding: 20px;
  border: 1.5px solid ${COLORS.light._02};
}
  
`;
export const PaddingMobileDropzone = styled.div`
 display: flex;
 flex: 1;
@media (max-width:${BREAKPOINTS.md}) {
  padding: 20px;
}
  
`;
