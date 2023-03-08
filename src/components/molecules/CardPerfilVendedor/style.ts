import { BREAKPOINTS, COLORS } from "@/common";
import Image from "next/image";
import styled from "styled-components";

export const CardVendedor = styled.div`
  width: 100%;
  max-width: 400px;
  border-radius: 5px;
  border: solid 2px ${COLORS.light._02};
  padding-bottom: 24px;

  @media (max-width: ${BREAKPOINTS.sm}) {
    border-left: none;
    border-right: none;
    padding-bottom: 0;
  }
`;

export const HeaderCard = styled.header`
  display: flex;
  gap: 24px;
  border-bottom: solid 2px ${COLORS.light._02};
  padding: 25px 24px;
  align-items: center;
`;
export const ImagePerfil = styled(Image)`
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 5px;
`;
export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 4px;
  h5 {
    color: ${COLORS.gray._02};
    font-size: 16px;
    font-weight: 600;
  }

  button {
    width: 120px;
    height: 38px;
    background: ${COLORS.sub_brand._03};
    color: ${COLORS.sub_brand._02};
  }
`;

export const TitleSection = styled.h6`
  color: ${COLORS.gray._04};
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 4px;
`;

export const CardSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 24px 24px 0 24px;
  border-bottom: solid 1px ${COLORS.light._02};
  padding-bottom: 24px;

  :last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    :first-child {
      border-bottom: none;
      padding-bottom: none;
    }
    :last-child {
      padding-bottom: 24px;
    }
  }
  h5 {
    color: ${COLORS.gray._02};
    font-size: 16px;
    font-weight: 400;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  button {
    color: ${COLORS.sub_brand._02};
    font-weight: 500;
    font-size: 16px;
    width: fit-content;
    border: none;
    text-align: start;
    background: none;
  }
`;

export const InfoSeller = styled.div`
  @media (max-width: ${BREAKPOINTS.sm}) {
    display: flex;
    align-items: center;
  }
`;
export const RowVertical = styled.div`
  display: none;

  @media (max-width: ${BREAKPOINTS.sm}) {
    display: block;
    height: 50px;
    width: 2px;
    background-color: ${COLORS.light._02};
  }
`;
