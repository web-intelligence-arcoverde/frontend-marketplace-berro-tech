import {COLORS} from '@/common';
import styled from 'styled-components';

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;

  #back {
    width: max-content;
    height: 40px;
    background: transparent;
    color: ${COLORS.gray._02};
    border: 1.5px solid ${COLORS.light._02};
    padding: 10px 16px;
    gap: 16px;
    font-size: 14px;
    font-weight: 400;
    margin-top: 8px;
    img {
      transform: rotate(270deg);
    }
  }
  .resend {
    background-color: ${COLORS.light._02};
    color: ${COLORS.gray._03};
  }
  .cursor {
    cursor: auto;
  }
  h4 {
    font-weight: 500;
    font-size: 16px;
    color: ${COLORS.dark._04};
    text-align: center;
  }
  h6 {
    color: ${COLORS.gray._04};
    font-size: 16px;
    font-weight: 400;
    text-align: center;
  }
`;
