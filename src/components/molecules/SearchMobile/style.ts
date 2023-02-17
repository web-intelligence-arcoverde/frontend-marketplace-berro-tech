import { COLORS } from '@/common';
import styled from 'styled-components';

export const ContainerSearchMobile = styled.div`
  position: absolute;
  left: 0;
  top: 116px;
  background-color: ${COLORS.light._05};
  width: 100%;
  height: 100vh;
  z-index: 10;
`;

export const CardSearch = styled.div`
background-color: ${COLORS.light._02};
padding: 20px 20px 20px 0;
width: 100%;
`