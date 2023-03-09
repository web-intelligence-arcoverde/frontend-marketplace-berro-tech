import { BREAKPOINTS, COLORS } from "@/common";
import styled from "styled-components";

export const ContainerDescriptionProduct = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 1.5px ${COLORS.light._02};
  max-width: 700px;

  @media (max-width: ${BREAKPOINTS.sm}) {
    margin: 56px 0;
  }
`;

export const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-bottom: solid 1.5px ${COLORS.light._02};
  padding-bottom: 30px;

  h5 {
    font-size: 18px;
    color: ${COLORS.gray._02};
    font-weight: 500;
    padding: 24px 24px 0 24px;
  }
  p {
    font-size: 16px;
    color: ${COLORS.gray._04};
    font-weight: 400;
    padding: 0 24px;
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    h5 {
      padding: 32px 20px 0 20px;
    }

    p {
      padding: 0 20px;
    }
  }
`;

export const ListDescriptionProduct = styled.ul`
  display: flex;
  justify-content: space-between;

  li {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 24px;
    width: 33%;

    h6 {
      font-size: 14px;
      font-weight: 400;
      color: ${COLORS.gray._04};
    }
    h5 {
      font-size: 16px;
      font-weight: 400;
      color: ${COLORS.gray._02};
    }

    :nth-child(2) {
      width: 33%;
      border-left: solid 1.5px ${COLORS.light._02};
      border-right: solid 1.5px ${COLORS.light._02};
    }
  }

  @media (max-width: ${BREAKPOINTS.sm}) {
    flex-wrap: wrap;

    li {
      width: 50%;
      border-bottom: solid 1.5px ${COLORS.light._02};
      padding: 16px 20px;

      :nth-child(2) {
        width: 50%;
      }
      :last-child {
        width: 100%;
      }
    }
  }
`;
