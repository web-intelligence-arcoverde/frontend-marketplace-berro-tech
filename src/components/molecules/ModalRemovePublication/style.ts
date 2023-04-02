import { COLORS } from "@/common";
import styled from "styled-components";

export const CardRemove = styled.div`
  width: 500px;
  border-radius: 5px;
  border-top: solid 3px ${COLORS.auxiliary.red_state};
  padding: 28px 24px 24px 24px;
  background: ${COLORS.light._05};

  h1 {
    font-weight: 450;
    font-size: 18px;
    color: ${COLORS.gray._01};
  }
  h6 {
    margin-top: 8px;
    margin-bottom: 30px;
    font-weight: 400;
    font-size: 16px;
    color: ${COLORS.gray._04};
  }
`;

export const CardButtons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  border-top: solid 2px ${COLORS.light._02};
  padding: 24px 0;

  button {
    :first-child {
      color: ${COLORS.gray._02};
      background:${COLORS.light._02}
    }
    :last-child {
      color: ${COLORS.light._05};
      background:${COLORS.sub_brand._02};
    }
  }
`;
