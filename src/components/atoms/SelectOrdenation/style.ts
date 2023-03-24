import { COLORS } from "@/common";
import styled from "styled-components";

export const ContainerSelectProduct = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  max-width: 160px;
`;

export const CardSelectProduct = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 48px;
  width: 100%;
  border: 1px solid ${COLORS.light._02};
  border-top: 0;
  border-radius: 5px;
  background-color: ${COLORS.light._05};

  span {
    padding: 18px;
    font-size: 12px;
    color: ${COLORS.gray._02};

    cursor: pointer;
    :hover {
      background-color: ${COLORS.light._03};
    }
    :first-child {
      border-bottom: 1px solid ${COLORS.light._02};
    }
  }
`;

export const SelectProduct = styled.div<{ open: boolean }>`
  width: 100%;
  border: 1px solid ${COLORS.light._02};
  background-color: ${(props) => (props.open ? `${COLORS.light._03}` : "")};
  border-radius: 5px;
  padding: 12px 18px;
  height: 48px;
  font-size: 12px;
  color: ${COLORS.gray._02};
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  img {
    width: 20px;
    transform: ${(props) => (props.open ? " " : "rotate(180deg)")};
  }
`;
