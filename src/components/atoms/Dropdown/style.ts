import { COLORS } from "@/common";
import styled from "styled-components";
import Image from "next/image";


export const DropdownWrapper = styled.div`
  position: relative;
`;
interface DropdownImageProps {
  open?: boolean
}
export const DropdownImage = styled(Image)<DropdownImageProps>`
  rotate:${(props) => props.open ? '180deg' : '0deg'} ;
  transition: 0s;
`
export const DropdownHeader = styled.div`
  width: fit-content;
  background: transparent;
  border: none;
  padding: 20px;
  border-left: 1.5px solid ${COLORS.light._02};
  border-bottom: 1.5px solid ${COLORS.light._02};
  cursor: pointer;
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  right: 0;
  width: max-content;
  background-color: ${COLORS.light._04};
  border: 1.5px solid ${COLORS.light._02};
  border-radius: 4px;
  z-index: 1;
  padding: 0;
  margin: 0;
  list-style: none;
  &>:last-child{
    border-bottom:none;
  }
`;

export const DropdownItem = styled.li`
  width: max-content;
  padding: 20px;
  font-weight: 400;
  font-size: 14px;
  color: ${COLORS.gray._01};
  border-bottom: 1.5px solid ${COLORS.light._02};
  cursor: pointer;

`;