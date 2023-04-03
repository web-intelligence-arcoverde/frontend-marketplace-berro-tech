import styled from "styled-components";
import { BREAKPOINTS, COLORS } from "@/common";

export const Card = styled.div<{
  maxWidth?: string;
  width?: string;
  minWidth?: string;
  widthTablet?: string;
}>`
  background: ${COLORS.light._05};
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.width ? props.width : "48%")};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "380px")};
  min-width: ${(props) => (props.minWidth ? props.minWidth : "300px")};
  border-radius: 5px;
  cursor: pointer;
  img {
    max-width: 100%;
    max-height: 290px;
    object-fit: cover;
    border-radius: 5px 5px 0px 0px;
  }
  @media (max-width: ${BREAKPOINTS.lg}) {
    border-top: none;
    width: ${(props) => (props.widthTablet ? props.widthTablet : "100%")};
    margin: 0 auto;
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    border-top: none;
    width: 100%;
    margin: 0 auto;
    max-width: 100%;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 24px 0;
  align-items: center;
  border: solid 1.5px ${COLORS.light._02};
  border-bottom: none;
  @media (max-width: ${BREAKPOINTS.sm}) {
    border-top: none;
  }

  p {
    color: ${COLORS.gray._02};
    font-size: 16px;
    margin-top: 24px;
  }
  h6 {
    color: ${COLORS.gray._04};
    font-weight: 400;
    font-size: 14px;
    margin-top: 24px;
  }
  h4 {
    color: ${COLORS.gray._01};
    font-size: 18px;
    font-weight: 600;
    margin: 12px 0;
  }
  p,
  h6,
  h5,
  h4 {
    ::first-letter {
      text-transform: uppercase;
    }
  }
`;

export const CattleInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  & :first-child {
    border-radius: 0 0 0 5px;
  }
  & :last-child {
    border-radius: 0 0 5px 0;
  }
`;
export const CattleCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  padding: 16px;
  border: solid 1.5px ${COLORS.light._02};

  h6,
  h5 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    font-size: 14px;
    font-weight: 400;
  }
  h6 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    color: ${COLORS.gray._04};
  }
  h5 {
    color: ${COLORS.gray._04};
  }
`;
