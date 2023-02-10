import styled from "styled-components";
import { COLORS } from "@/common";

export const Card = styled.div`
  background: ${COLORS.white_color_100};
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 390px;
  border-radius: 5px;
  img {
    max-width: 100%;
    max-height: 290px;
    object-fit: cover;
    border-radius: 5px 5px 0px 0px;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 24px 0;
  align-items: center;
  border-left: solid 1px ${COLORS.gray_color_13};
  border-right: solid 1px ${COLORS.gray_color_13};
  p {
    color: ${COLORS.gray_color_07};
    font-size: 16px;
    margin-top: 24px;
  }
  h6 {
    color: ${COLORS.gray_color_010};
    font-weight: 400;
    font-size: 14px;
    margin-top: 24px;
  }
  h4 {
    color: ${COLORS.gray_color_06};
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
  border: solid 1px ${COLORS.gray_color_13};

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
    color: ${COLORS.gray_color_010};
  }
  h5 {
    color: ${COLORS.gray_color_010};
  }
`;
