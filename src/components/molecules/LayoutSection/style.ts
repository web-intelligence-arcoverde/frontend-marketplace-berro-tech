import { COLORS } from "@/common";
import Image from "next/image";
import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 100px;
  border-bottom: 2px solid ${COLORS.light._02};
  /* background-color: ${COLORS.light._02}; */

  p {
    color: ${COLORS.dark._04};
    line-height: 45px;
  }
  :first-child {
    background-color: ${COLORS.brand_light._04};
  }
  :last-child {
    border: none;
  }
  :nth-child(even) {
    flex-direction: row-reverse;

    #arrow {
      transform: rotate(180deg);
    }
  }
  :nth-child(3) {
    footer {
      display: block;
      display: flex;
    }
  }
  :nth-child(3),
  :nth-child(4) {
    aside {
      flex-direction: column-reverse;
    }
  }
`;
export const FirstCard = styled.div`
  width: 35%;
`;

export const CardTitle = styled.aside`
  display: flex;
  flex-direction: column;
`;

export const Arrow = styled(Image)`
  margin: 20px 0;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  color: ${COLORS.sub_brand._02};
  font-weight: 500;
`;
export const CardChildren = styled.div`
  width: 60%;
  color: ${COLORS.dark._04};
  line-height: 45px;
`;
export const CardSteps = styled.footer`
  display: flex;
  margin-top: 120px;
  display: none;
`;
