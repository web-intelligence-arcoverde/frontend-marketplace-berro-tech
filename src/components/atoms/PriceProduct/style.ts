import { COLORS } from "@/common";
import styled from "styled-components";

export const ContainerPrice = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 1.5px solid ${COLORS.light._02};
  border-right: 1.5px solid ${COLORS.light._02};
`;

export const CardPrice = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 24px;
  gap: 12px;
  h5 {
    font-size: 16px;
    font-weight: 400;
    color: ${COLORS.gray._04};
  }
`;

export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    font-size: 18px;
    font-weight: 500;
    color: ${COLORS.gray._02};
    span {
      color: ${COLORS.brand_dark._04};
    }
  }
  h6 {
    font-size: 16px;
    font-weight: 400;
    color: ${COLORS.gray._04};
  }
`;