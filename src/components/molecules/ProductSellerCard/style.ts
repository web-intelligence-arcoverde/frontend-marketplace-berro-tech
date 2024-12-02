import { breakpoints, colors } from '@/common';
import styled from 'styled-components';

export const ProductSellerContainer = styled.div`
  margin-top: 32px;
  width: 100%;
  display: flex;
  border: 1.5px solid ${colors.light._02};
  border-radius: 5px;
  max-height: 340px;
  h3 {
    font-weight: 600;
    font-size: 18px;
    color: ${colors.gray._02};
  }
  @media (max-width: ${breakpoints.md}) {
    flex-direction: column;
    max-height: none;
  }
`;

export const DescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const LinkContainer = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  padding: 24px;
`;

export const SellerLink = styled.button`
  display: flex;
  border: none;
  justify-content: center;
  width: 100%;
  border-radius: 5px;
  font-weight: 500;
  font-size: 16px;
  padding: 16px 0;
  color: ${colors.sub_brand._02};
  background: ${colors.sub_brand._03};
`;

export const DescriptionCard = styled.div`
  border-bottom: 1.5px solid ${colors.light._02};
  padding: 24px 0;
  h6 {
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: ${colors.gray._02};
    margin-bottom: 8px;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    color: ${colors.gray._02};
  }
`;
export const NameAvaliation = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InfoCard = styled.div`
  border-bottom: 1.5px solid ${colors.light._02};
  padding: 24px;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: ${breakpoints.md}) {
    border-top: 1.5px solid ${colors.light._02};
    flex-direction: row;
    padding: 0 24px;
  }
`;
export const InfoCardToMobile = styled.div`
  width: 100%;
  @media (max-width: ${breakpoints.md}) {
    border-right: 1.5px solid ${colors.light._02};
    & > :last-child {
      padding: 24px 0;
    }
  }
  & > :last-child {
    border: none;
    padding-bottom: 0;
  }
`;
export const TitleToMobile = styled.div`
  padding: 24px;
`;
export const AvaliationBorderToMobile = styled.div`
  padding: 16px;
  border: 1.5px solid ${colors.light._02};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageContainer = styled.div`
  border-left: 1.5px solid ${colors.light._02};
  display: flex;
  padding: 24px;
  height: 100%;
  width: 100%;

  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 5px;
    object-fit: cover;
  }

  @media (max-width: ${breakpoints.md}) {
    border: none;
    padding-right: 0;
    width: unset;
    height: unset;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;
