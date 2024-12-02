import { colors, breakpoints } from '@/common';
import styled from 'styled-components';

export const AccordionContainer = styled.aside`
  transition: 1s;
  padding: 0 16px;
  padding-bottom: 0;
  border-bottom: 1px solid ${colors.light._02};
  border-right: 1px solid ${colors.light._02};
`;

export const ArrowImage = styled.div<{ isOpen: boolean }>`
  rotate: ${(props) => (props.isOpen ? '-90deg' : '90deg')};
  transition: 0.5s;
`;
export const AccordionHeader = styled.div`
  cursor: pointer;
  width: 100%;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: ${breakpoints.md}) {
  }
`;

export const AccordionContent = styled.div<{ isExpanded: boolean }>`
  max-height: ${(props) => (props.isExpanded ? '1000px' : '0')};
  overflow: hidden;
  transition: 0.5s;
`;

export const AccordionIconTitle = styled.div`
  display: flex;
  gap: 20px;
  h3 {
    font-weight: 500;
    font-size: 16px;
    color: ${colors.gray._02};
  }
`;
