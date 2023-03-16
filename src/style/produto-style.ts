import { BREAKPOINTS, COLORS } from "@/common";
import styled from "styled-components";
import { CardButton } from "@/components/atoms/Button/style";

export const Content = styled.section`
  display: flex;
  padding: 44px 112px 112px 112px;
  gap: 32px;
  background-color: ${COLORS.light._05};
  @media (max-width: ${BREAKPOINTS.md}) {
    
    padding: 0;
    flex-direction: column;
    @media (max-width: ${BREAKPOINTS.md}){
    gap: 0;
  }
}
`;

export const ImagesProduct = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  max-width: 696px;
  gap: 32px;
  
  @media (max-width: ${BREAKPOINTS.md}){
    max-width: none;
  }
`;
 
export const InfoProduct = styled.div`
  display: flex;
  width: 100%;
  border: 1.5px solid ${COLORS.light._02};
  border-radius: 5px;
  height: fit-content;
  flex-direction: column;
  max-width: 488px;
  gap: 32px;
  
  @media (max-width: ${BREAKPOINTS.md}){
    max-width: none;
  }
`;



export const NearProductsContainer = styled.div`
border-top: 1.5px solid ${COLORS.light._02};
background: ${COLORS.light._05};
padding: 112px;
display: flex;
flex-direction: column;
gap: 48px;
@media (max-width: ${BREAKPOINTS.md}){
  padding: 44px 0 44px 20px;
}
`;

export const NearProducts = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  overflow-x: auto;
@media (max-width: ${BREAKPOINTS.md}){
  flex-wrap: nowrap;
}
`;
export const NearProductsTitleContainer = styled.section`
  display: flex;
  justify-content: space-between;
  h1{
    font-weight: 600;
    font-size: 32px;
    color: ${COLORS.brand_dark._01};
  }
`;
export const LinkNearProducts = styled.a`
  display: flex;
  align-items: center;
  padding: 12px 24px;
  background: ${COLORS.light._05};
  border: 1.5px solid ${COLORS.light._02};
  border-radius: 5px;
  font-weight: 500;
  font-size: 16px;
  color: ${COLORS.gray._02};

`;