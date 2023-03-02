import { COLORS } from "@/common";
import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 2px ${COLORS.light._02};
  border-radius: 5px;
  max-width:700px;
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
max-height: 400px;
width: 100%;
border: none;
`
