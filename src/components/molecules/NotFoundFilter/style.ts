import { colors } from '@/common';
import styled from 'styled-components';

export const ContainerNotFound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 4px;
  padding: 100px 0;
  align-items: center;
  img {
    margin-bottom: 32px;
  }
  h1 {
    font-size: 18px;
    font-weight: 500;
    color: ${colors.gray._01};
    text-align: center;
    word-wrap: break-word;
    max-width: 100%;
  }
  h6 {
    font-size: 16px;
    font-weight: 400;
    color: ${colors.gray._04};
    text-align: center;
  }
`;
