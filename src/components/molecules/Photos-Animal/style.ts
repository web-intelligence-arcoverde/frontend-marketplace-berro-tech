import { COLORS } from "@/common";
import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 2px ${COLORS.light._02};
  border-radius: 5px;
  max-width: 700px;
  width: 100%;
`;

export const CardSteps = styled.ul`
  margin: 16px 24px;
  display: flex;
  gap: 14px;
  li {
    color: ${COLORS.gray._04};

    :last-child {
      color: ${COLORS.sub_brand._02};
      font-weight: 500;
    }
  }
`;

export const CurrentImage = styled(Image)`
  max-width: 700px;
  height: 400px;
  width: 100%;
  border: none;
  object-fit: cover;
`;
export const ListPhotos = styled.ul`
  display: flex;
  width: 100%;
  flex-wrap: nowrap;
  position: relative;

  #see-more {
    img {
      filter: brightness(40%) opacity(50%);
      pointer-events: none;
    }
  }

  li {
    width: 19.5%;
    padding: 16px;

    img {
      cursor: pointer;
      object-fit: cover;
      width: 120px;
      height: 75px;
      border-radius: 5px;
    }
  }
`;

export const SeeMore = styled.span`
  width: 50px;
  height: 50px;
  padding: 10px;
  background-color: transparent;
  position: absolute;
  right: 7.5%;
  bottom: 30px;
  color: ${COLORS.light._05};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.15);
  font-size: 16px;
  cursor: pointer;
  z-index: 10;
  
`;
