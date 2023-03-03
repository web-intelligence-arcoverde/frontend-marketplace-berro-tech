import { BREAKPOINTS, COLORS } from "@/common";
import styled from "styled-components";

export const BussinesContainer = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  padding: 45px 100px;
  max-width: ${BREAKPOINTS.xxg};
  @media (max-width:${BREAKPOINTS.lg}) {
    flex-direction: column;
    padding: 45px 20px;
  }
`
export const ProductContainer = styled.div`
  display: flex;
  width: 70%;
  @media (max-width:${BREAKPOINTS.lg}) {
   width: 100%;
    flex-direction: column;
  }

`
export const SelectContainer = styled.div`
width: 30%;
display: flex;
justify-content: end;
background: transparent;
border-bottom: 1px solid ${COLORS.light._02};
padding-bottom: 16px;
@media (max-width:${BREAKPOINTS.lg}) {
  display: none;

  }
  `
export const SelectProduct = styled.select`
border: 1px solid ${COLORS.light._02};
border-radius: 5px;
padding: 12px 12px 12px 24px;
color: ${COLORS.gray._02};
display: flex;
flex-direction: row;
align-items: center;
gap: 20px;
`
export const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  .tabs{
    border-bottom: 1px solid ${COLORS.light._02};
    display: flex;
    padding-bottom:16px;
    .tab{
      border-radius: 5px;
      cursor: pointer;
      font-weight: 400;
      font-size: 16px;
      color: ${COLORS.gray._03};
      padding: 12px 24px;
    }
    .active{
      font-weight: 500;
      color:${COLORS.brand_dark._03};
      background: ${COLORS.brand_light._03};
    }
  }
  flex-direction: column;
  @media (max-width:${BREAKPOINTS.lg}) {
      width: 100%;
      .tabs{
        width: 100%;
        .tab{
          width: 100%;
          text-align: center;
        }
      }
    }
  `