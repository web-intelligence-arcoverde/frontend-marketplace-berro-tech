import styled from "styled-components";
import { COLORS } from "@/common/index";

export const Container = styled.div`
  border-radius: 5px;
  width: fit-content;
  background: ${COLORS.white_color_100};
  border: 1.5px solid ${COLORS.gray_color_13};
  border-radius: 5px;
  .img-Seller {
    width: 100%;
    border-radius: 5px 5px 0 0;
    object-fit: cover;
  }
`;
export const ContactContainer = styled.div`
  border-top: 1.5px solid ${COLORS.gray_color_13};
  padding: 24px;
  display: flex;
  width: 100%;
  gap: 24px;
  button{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .contat-button{
    width: 100% !important;
    padding:0px 16px;
    margin: 0;
    gap: 15px;
    border-radius: 5px !important;
    background: ${COLORS.auxiliars_green} ;
  }
  .share-button{
    width: fit-content !important;
    margin: 0;
    border-radius: 5px !important;
    border: 1.5px solid ${COLORS.gray_color_13};
    background: ${COLORS.white_color_100} ;
  }
`;
