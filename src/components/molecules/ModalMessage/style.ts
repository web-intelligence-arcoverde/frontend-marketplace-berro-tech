import { breakpoints, colors } from '@/common';
import styled from 'styled-components';

export const ContainerModalMessage = styled.div<{ error: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 600px;
  max-height: 350px;
  border-radius: 5px 5px 0 0;
  justify-content: center;
  align-items: center;
  border-top: solid 3px ${colors.brand_light._01};
  border-color: ${(props) =>
    props.error
      ? `${colors.auxiliary.red_state}`
      : `${colors.brand_light._01}`};
  background-color: ${colors.light._05};
  padding: 80px 70px;
  position: relative;
  text-align: center;

  img,
  svg {
    margin-bottom: 28px;
  }
  h1 {
    font-weight: 500;
    font-size: 18px;
    color: ${colors.gray._01};
  }
  h6 {
    font-weight: 400;
    font-size: 16px;
    color: ${colors.gray._04};
  }

  @media (max-width: ${breakpoints.sm}) {
    padding: 80px 60px;
    width: 100%;
  }
`;

export const ButtonClose = styled.button`
  img {
    margin: 0;
    width: 17px;
  }
  width: 44px;
  height: 44px;
  padding: 10px;
  border-radius: 5px;
  border: solid 1.5px ${colors.light._02};
  position: absolute;
  right: 15px;
  top: 15px;
`;
