import styled from 'styled-components';
import {COLORS} from '@/common';

export const CardAvatar = styled.div`
  cursor: pointer;

  img {
    width: 46px;
    height: 46px;
    border-radius: 5px;
    border: solid 2px ${COLORS.white_color_100};
    margin-top: 4px;
  }
`;
