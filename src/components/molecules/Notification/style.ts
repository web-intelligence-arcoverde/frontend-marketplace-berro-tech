import { COLORS } from "@/common";
import styled from "styled-components";

export const ContainerNotification = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 1.5px ${COLORS.light._02};
  padding-top: 24px;

  p {
    padding: 0 24px 24px 24px;
    font-size: 16px;
    color: ${COLORS.gray._04};
  }
`;

export const CardToogle = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: solid 1.5px ${COLORS.light._02};
  padding-top: 24px;
  @media (max-width:769px){
  
  }
`;

export const ButtonToogle = styled.button<{ isOn: boolean }>`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;
  border-radius: 50px;
  border: none;
  background-color: ${(props) =>
    props.isOn ? `${COLORS.gray._01}` : `${COLORS.light._02}`};
  cursor: pointer;
  margin-right: 24px;

  &::before {
    content: "";
    position: absolute;
    top: 2px;
    left: ${(props) => (props.isOn ? "27px" : "2px")};
    width: 21px;
    height: 21px;
    border-radius: 50%;
    background-color: #fff;
    transition: left 0.3s ease-in-out;
  }
`;
