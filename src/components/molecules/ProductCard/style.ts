import styled from "styled-components";
import { COLORS } from "@/common/colors";

export const Card = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border: 1px solid ${COLORS.gray_color_70};
  img {
    object-fit: contain;
    width: 100%;
  }
`;
export const TitleCard = styled.div`
  width: 100%;
  display: flex;
  padding: 5px 20px 2px 20px;
  border-bottom: 1px solid ${COLORS.gray_color_70};
  flex-direction: column;
  font-size: 20px;
  color: ${COLORS.black_color_50};
  h5 {
    font-weight: 500;
  }
  p {
    font-weight: 700;
    text-align: end;
  }
`;
export const DetailsCard = styled.div`
  width: 100%;
  padding: 18px;
  display: flex;
  flex-wrap: wrap;
`;
export const DescriptionDetails = styled.div`
  width: 50%;
  display: flex;
  gap: 2px;
  align-items: center;
  img {
    width: auto;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    color: ${COLORS.black_color_50};
  }
`;
