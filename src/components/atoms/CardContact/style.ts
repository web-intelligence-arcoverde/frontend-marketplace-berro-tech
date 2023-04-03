import styled from "styled-components";
import { COLORS } from "@/common/index";

export const Container = styled.div`
  border-top: 1.5px solid ${COLORS.light._02};
  padding: 24px;
  display: flex;
  width: 100%;
  gap: 24px;
  min-width:330px;

  button ,a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a {
    width: 100%;
    padding: 0px 16px;
    margin: 0;
    gap: 15px;
    border-radius: 5px;
    background: ${COLORS.auxiliary.green_confirm};
    font-weight: 600;
    font-size: 16px;
    color: ${COLORS.light._05};
  }
  
  button {
    width: fit-content;
    border-radius: 5px;
    border: 1.5px solid ${COLORS.light._02};
    background: ${COLORS.light._05};
  }
`;