import styled from "styled-components";
import { COLORS } from "@/common";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  margin: 50px;
  img {
    width: 400px;
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


export const LastContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  padding: 16px;
  border: solid 1px ${COLORS.gray_color_13};

  h6,
  h5 {
    font-size: 14px;
    font-weight: 400;
  }
  h6 {
    color: ${COLORS.gray_color_010};
  }
  h5 {
    color: ${COLORS.gray_color_70};
  }
`;
