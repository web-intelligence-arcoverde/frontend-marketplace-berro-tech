import { breakpoints, colors } from '@/common';
import styled from 'styled-components';

export const Container = styled.section`
  background: ${colors.light._05};
  width: 100%;
  padding: 160px 100px;
  display: flex;
  gap: 56px;
  @media (max-width: ${breakpoints.md}) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 160px 20px;
  }
`;
export const SearchSideBar = styled.div`
  min-width: 310px;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  h2 {
    font-weight: 600;
    font-size: 32px;
    color: ${colors.brand_dark._01};
  }
  .tabs {
    width: 100%;
    margin-top: 32px;
    .tab {
      text-align: start;
      cursor: pointer;
      font-weight: 400;
      font-size: 16px;
      color: ${colors.gray._03};
      padding: 16px 24px;
      text-align: start;
    }
    .active {
      color: ${colors.dark._03};
      background: ${colors.sub_brand._03};
      border-left: 3px solid ${colors.sub_brand._02};
    }
  }

  @media (max-width: ${breakpoints.md}) {
    width: 100%;
    max-width: none;
    .tabs {
      display: flex;
      width: 100%;
      overflow-x: auto;

      .tab {
        white-space: nowrap;
        word-break: keep-all;
        width: max-content;
        padding: 16px 26px;
        vertical-align: middle;
        font-size: 14px;
      }
    }
  }
`;
export const SearchResponseContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 32px 16px;

  @media (max-width: 1255px) and (min-width: 1200px) {
    width: 800px;
  }

  @media (max-width: ${breakpoints.md}) {
    justify-content: space-between;
    overflow-x: scroll;
    width: 100%;
    flex-wrap: nowrap;
  }
`;
export const InputSearchBar = styled.input`
  border: none;
  width: 100%;
  margin-left: 20px;
`;

export const InputContainer = styled.form`
  display: flex;
  padding: 10px;
  margin-top: 32px;
  width: 100%;
  border-bottom: solid 1px ${colors.light._02};
  @media (max-width: ${breakpoints.md}) {
  }
`;
