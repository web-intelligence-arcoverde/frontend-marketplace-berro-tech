
import { BREAKPOINTS, COLORS } from "@/common";
import styled from "styled-components";

export const Container = styled.aside`
  width: 30%;
  @media (max-width:${BREAKPOINTS.md}) {
   width: 100%;
   
  }
`
export const FiltersIconTitle = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  h3{
  font-weight: 500;
  font-size: 16px;
  color: ${COLORS.gray._02};
}
`;

export const ArrowImage = styled.div<{ isOpen: boolean }>`
  rotate:${(props) => props.isOpen ? '-90deg' : '90deg'};
  transition: 0.5s;
`

export const FiltersIconTitleHeader = styled.div`
  cursor: pointer;
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${COLORS.light._02};
  @media (max-width:${BREAKPOINTS.md}) {
  }
  
`

export const FiltersHeaderContainer = styled.div`
  width: 100%;
  display: flex;
`
export const BadgeContainer = styled.div`
display: flex;
width: 100%;
gap: 12px;
overflow: auto;
padding: 12px 0 12px 16px;
`
export const HeaderFilterMobile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${COLORS.light._05};
  padding: 20px;
  border-bottom: 1.5px solid ${COLORS.light._02};
  border-radius: 15px 15px 0 0;
  h3{
  font-weight: 500;
  font-size: 14px;
  color: ${COLORS.gray._02};
  }
`
export const ButtonModal = styled.button`
width: fit-content;
background: transparent;
border: none;
padding: 20px;
border-left: 1.5px solid ${COLORS.light._02};
border-bottom: 1.5px solid ${COLORS.light._02};
`

export const Badge = styled.div`
font-weight: 500;
font-size: 14px;
color: ${COLORS.sub_brand._02};
display: flex;
justify-content: center;
padding: 8px 12px;
background: ${COLORS.opacity.blue_05};
border: 1.5px solid ${COLORS.opacity.blue_01};
border-radius: 5px;
`

export const FilterButtonContainer = styled.div`
  display: flex;
`;
export const CleanFilterButton = styled.button`
  color:${COLORS.auxiliary.red_state} ;
  border-radius: 5px;
  background-color: transparent;
  padding: 8px 20px;
  border: none;
  `;
export const ApplyFilterButton = styled.button`
  color: ${COLORS.light._05};
  border: none;
  background-color: ${COLORS.sub_brand._02};
  border-radius: 5px;
  padding: 8px 20px;
`;
