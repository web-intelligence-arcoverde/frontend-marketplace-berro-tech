import styled from 'styled-components';
import {BREAKPOINTS} from '@/common';

export const Main = styled.main`
  max-width: ${BREAKPOINTS.xxg};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;
