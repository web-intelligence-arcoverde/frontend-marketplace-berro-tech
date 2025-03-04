import { colors } from '@/common';
import styled from 'styled-components';

export const ContainerSelectProduct = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  max-width: 140px;
  background-color: ${colors.light._05};
`;

export const CardSelectProduct = styled.div<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 48px;
  width: 100%;
  border: 1px solid ${colors.light._02};
  border-top: 0;
  border-radius: ${(props) => (props.open ? `0 0 5px 5px ` : '5px')};
  background-color: ${colors.light._05};

  span {
    padding: 18px;
    font-size: 12px;
    color: ${colors.gray._02};

    cursor: pointer;
    :hover {
      background-color: ${colors.light._03};
    }
    :first-child {
      border-bottom: 1px solid ${colors.light._02};
    }
  }
`;

export const SelectProduct = styled.div<{ open: boolean }>`
  width: 100%;
  border: 1px solid ${colors.light._02};
  background-color: ${(props) => (props.open ? `${colors.light._03}` : '')};
  border-radius: ${(props) => (props.open ? `5px 5px 0 0` : '5px')};
  padding: 12px 12px 12px 18px;
  height: 48px;
  font-size: 12px;
  color: ${colors.gray._02};
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;
  img {
    width: 20px;
    transform: ${(props) => (props.open ? ' ' : 'rotate(180deg)')};
  }
`;
